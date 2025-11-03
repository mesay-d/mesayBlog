import Head from 'next/head';
import MessageList from '../components/messages/message-list';
import MessageStats from '../components/messages/message-stats';
import { getLatestMessages, getMessageStats } from '../lib/db-utils';
import Link from 'next/link';

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach(function(cookie) {
    const parts = cookie.split('=');
    const key = parts.shift().trim();
    const value = decodeURI(parts.join('='));
    list[key] = value;
  });
  return list;
}

function AuthorizePage({ user, messages = [], error, stats = [] }) {
  return (
    <>
      <Head>
        <title>Authorized Page</title>
      </Head>
      <main style={{ padding: 20 }}>
        <h1>Authorized content</h1>
        <p>Welcome{user ? `, ${user}` : ''}! You have access to this protected page.</p>

        <p>
          To sign out, <Link href="/api/logout">click here to logout</Link> and then refresh.
        </p>

          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <MessageList messages={messages} error={error} />
            </div>
            <div style={{ width: 420, minWidth: 280 }}>
              <MessageStats stats={stats} />
            </div>
          </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies(req.headers.cookie || '');

  // Compare cookie value with server-side secret
  const authToken = process.env.AUTH_TOKEN;

  if (!authToken || !cookies.auth || cookies.auth !== authToken) {
    // Not authorized -> redirect to login page
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Fetch latest messages from MongoDB (latest first), limit 10
  let messages = [];
  let error = null;
  let stats = [];

  try {
    messages = await getLatestMessages(10);
    // fetch per-day stats for last 4 months
    stats = await getMessageStats(4);
  } catch {
    error = 'Could not load messages.';
  }

  return {
    props: {
      user: 'Authorized User',
      messages,
      error,
      // pass stats
      stats,
    },
  };
}

export default AuthorizePage;
