import React, { useState } from 'react';
import styles from './company-profile.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CompanyProfile() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const logos = [
    '/images/site/mesayp.png',
    '/images/site/mesayp.png',
    '/images/site/mesayp.png',
    '/images/site/mesayp.png',
  ];

  async function submitQuickMessage(e) {
    e.preventDefault();
    if (!text || text.trim().length < 3) {
      setStatus({ ok: false, msg: 'Please enter a short message.' });
      return;
    }

    try {
      setStatus({ ok: null, msg: 'Sending...' });
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: '', name: 'Website Visitor', message: text }),
      });
      if (res.ok) {
        setStatus({ ok: true, msg: 'Message sent — thank you!' });
        setText('');
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ ok: false, msg: data.message || 'Failed to send. Try again later.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Network error. Try again later.' });
    }
  }

  return (
    <section className={styles.company} aria-labelledby="company-profile">
      <div className={styles.logos} aria-hidden>
        <div className={styles.track}>
          {logos.concat(logos).map((src, idx) => {
            const delay = `${(idx % logos.length) * 0.9}s`;
            return (
              <div
                className={styles.logoItem}
                key={idx}
                style={{ animationDelay: delay }}
              >
                <Image src={src} alt="partner logo" width={68} height={68} />
              </div>
            );
          })}
        </div>
      </div>

        <div className={styles.tagline}>
        <h3 id="company-profile">Company & Profile</h3>
        <p>Selected partners, collaborations, and a quick line to contact me directly from this page.</p>

        <form className={styles.quickForm} onSubmit={submitQuickMessage}>
          <textarea
            aria-label="Your message"
            placeholder="Write a short message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>

          <button
            type="button"
            className={styles.btnContinue}
            disabled={!text || text.trim().length < 3}
            onClick={() => {
              // navigate to contact page with the message in query so the contact form can continue
              router.push({ pathname: '/contact', query: { m: text } });
            }}
          >
            Continue on Contact Page
          </button>

        {status && (
          <div className={styles.notice} role={status.ok ? 'status' : 'alert'}>
            {status.msg}
          </div>
        )}
      </div>
    </section>
  );
}
