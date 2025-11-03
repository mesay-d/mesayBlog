import { useEffect, useState } from 'react';
import MessageList from '../../components/messages/message-list';
import MessageStats from '../../components/messages/message-stats';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/messages?page=${page}&limit=${limit}`);
        if (!res.ok) throw new Error('Failed to load messages');
        const data = await res.json();
        if (!cancelled) {
          setMessages(data.messages || []);
          setTotal(data.total || 0);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, [page, limit]);

  // Fetch statistics (messages per day for last 4 months)
  useEffect(() => {
    let cancelled = false;

    async function loadStats() {
      try {
        const res = await fetch('/api/message-stats');
        if (!res.ok) throw new Error('Failed to load statistics');
        const data = await res.json();
        if (!cancelled && data.stats) setStats(data.stats);
      } catch (err) {
        console.error('Stats error:', err);
      }
    }

    loadStats();
    return () => (cancelled = true);
  }, []);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <main style={{ padding: 20 }}>
  <h1>Messages</h1>

  <MessageStats stats={stats} />

      <div style={{ marginBottom: 12 }}>
        <label>
          Per page:{' '}
          <select value={limit} onChange={(e) => { setLimit(parseInt(e.target.value, 10)); setPage(1); }}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </label>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && messages.length === 0 && <p>No messages found.</p>}

      <MessageList messages={messages} error={error} />

      <div style={{ marginTop: 12 }}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>Prev</button>
        <span style={{ margin: '0 8px' }}>Page {page} / {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>Next</button>
      </div>
    </main>
  );
}
