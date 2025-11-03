import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();
  const router = useRouter();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  // If navigated from the CompanyProfile with a prefilled message (query param `m`), use it.
  useEffect(() => {
    if (!router.isReady) return;
    const { m } = router.query || {};
    if (m && !enteredMessage) {
      try {
        const decoded = Array.isArray(m) ? m[0] : m;
        setEnteredMessage(decodeURIComponent(decoded));
        // remove query param from URL without reloading the page
        router.replace(router.pathname, undefined, { shallow: true });
      } catch {
        // ignore malformed param
      }
    }
  }, [router, enteredMessage]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // client-side validation
    const newErrors = {};
    if (!enteredEmail || !/^\S+@\S+\.\S+$/.test(enteredEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!enteredName || enteredName.trim().length < 2) {
      newErrors.name = 'Please enter your name (2+ characters).';
    }
    if (!enteredMessage || enteredMessage.trim().length < 10) {
      newErrors.message = 'Please enter a message (10+ characters).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setRequestStatus('error');
      setRequestError('Please fix the highlighted errors.');
      return;
    }

    setErrors({});
    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form
        className={classes.form}
        onSubmit={sendMessageHandler}
        aria-busy={requestStatus === 'pending'}
      >
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => {
                setEnteredEmail(event.target.value);
                setErrors((s) => ({ ...s, email: undefined }));
              }}
            />
            {errors.email && <p className={classes.error}>{errors.email}</p>}
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => {
                setEnteredName(event.target.value);
                setErrors((s) => ({ ...s, name: undefined }));
              }}
            />
            {errors.name && <p className={classes.error}>{errors.name}</p>}
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => {
              setEnteredMessage(event.target.value);
              setErrors((s) => ({ ...s, message: undefined }));
            }}
          ></textarea>
          {errors.message && <p className={classes.error}>{errors.message}</p>}
        </div>

        <div className={classes.actions}>
          <button disabled={requestStatus === 'pending'}>Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
