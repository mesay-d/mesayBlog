import React from 'react';
import styles from './message-list.module.css';

function MessageList({ messages = [], error }) {
  return (
    <section className={styles.container}>
      <h2 id="messages-heading" className={styles.heading}>Latest messages</h2>
      {error && (
        <p className={styles.error}>{error}</p>
      )}

      {messages.length === 0 ? (
        <p className={styles.emptyMessage}>No messages yet.</p>
      ) : (
        <div className={styles.tableWrapper}>
          <table
            className={styles.table}
            aria-labelledby="messages-heading"
          >
            <thead>
              <tr>
                
                <th className={styles.th}>Name</th>
                <th className={styles.th}>email</th>
                <th className={styles.th}>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m) => (
                <tr key={m.id} className={styles.row}>
                  <td className={styles.td}>{m.name}</td>
                  <td className={styles.td}>{m.email}</td>
                  <td className={`${styles.td} ${styles.messageCell}`}>{m.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default MessageList;
