import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './message-stats.module.css';

// Dynamically import the Pie component to avoid SSR issues
const Pie = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie), { ssr: false });

// Register Chart.js components on client only
function registerChart() {
  // Import chart.js dynamically so this only runs in the browser
  return import('chart.js').then((module) => {
    const {
      Chart: ChartJS,
      ArcElement,
      Title,
      Tooltip,
      Legend,
    } = module;

    ChartJS.register(ArcElement, Title, Tooltip, Legend);
  });
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: '#fff' }
    },
    title: { display: true, text: 'Messages by Month (Last 4 Months)', color: '#fff' },
    tooltip: {
      callbacks: {
        label: function (context) {
          const dataset = context.dataset || {};
          const value = dataset.data ? dataset.data[context.dataIndex] : 0;
          const total = dataset.data ? dataset.data.reduce((a, b) => a + b, 0) : 0;
          const pct = total ? ((value / total) * 100).toFixed(1) : '0.0';
          return `${value} messages (${pct}%)`;
        }
      }
    }
  }
};

function MessageStats({ stats = [] }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerChart()
      .then(() => setReady(true))
      .catch((err) => {
        console.error('Chart registration failed', err);
        setReady(false);
      });
  }, []);

  // Aggregate stats by month (YYYY-MM)
  const monthlyMap = stats.reduce((map, item) => {
    const month = item.date.slice(0, 7); // "YYYY-MM"
    map.set(month, (map.get(month) || 0) + item.count);
    return map;
  }, new Map());

  // Build last N months list (ensure we always show the last 4 months)
  const monthsToShow = 4;
  const monthsList = [];
  const now = new Date();
  for (let i = monthsToShow - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    // YYYY-MM
    const key = d.toISOString().slice(0, 7);
    monthsList.push(key);
  }

  const labels = monthsList;
  const dataValues = labels.map((m) => monthlyMap.get(m) || 0);

  // Friendly month labels
  const labelNames = labels.map((m) => {
    const [y, mm] = m.split('-');
    const d = new Date(Number(y), Number(mm) - 1, 1);
    return d.toLocaleString('default', { month: 'short', year: 'numeric' });
  });

  const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336'];

  const data = {
    labels: labelNames,
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors.slice(0, labelNames.length),
        hoverOffset: 6,
        // small border for contrast on dark background
        borderColor: '#111',
        borderWidth: 1,
      }
    ]
  };

  const totalMessages = stats.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Total Messages</h3>
          <p>{totalMessages}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Period</h3>
          <p>{labelNames.length ? `${labelNames[0]} — ${labelNames[labelNames.length - 1]}` : '—'}</p>
        </div>
      </div>
      <div className={styles.chartContainer}>
        {ready ? <Pie options={options} data={data} /> : <p style={{ color: '#999' }}>Chart loading...</p>}
      </div>
    </div>
  );
}

export default MessageStats;