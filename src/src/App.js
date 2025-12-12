import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const HomePage = () => (
    <div style={styles.page}>
      <h1 style={styles.title}>🕌 Islamic App</h1>
      <p style={styles.subtitle}>As-salamu alaykum! 👋</p>
      
      <div style={styles.card}>
        <h2>🕋 Features:</h2>
        <button onClick={() => setPage('quran')} style={styles.menuButton}>
          📖 Quran Padhain
        </button>
        <button onClick={() => setPage('prayer')} style={styles.menuButton}>
          🕐 Namaz ka Time
        </button>
        <button onClick={() => setPage('tasbeeh')} style={styles.menuButton}>
          📿 Tasbeeh Counter
        </button>
        <button onClick={() => setPage('duas')} style={styles.menuButton}>
          🙏 Duas
        </button>
        <button onClick={() => setPage('qibla')} style={styles.menuButton}>
          🧭 Qibla Direction
        </button>
      </div>
    </div>
  );

  const QuranPage = () => (
    <div style={styles.page}>
      <button onClick={() => setPage('home')} style={styles.backButton}>
        ← Wapis
      </button>
      <h1 style={styles.title}>📖 Quran Majeed</h1>
      <div style={styles.card}>
        <h3>Surah Al-Fatihah</h3>
        <p style={styles.arabic}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p>Bismillah hir Rahman nir Raheem</p>
      </div>
    </div>
  );

  const PrayerPage = () => (
    <div style={styles.page}>
      <button onClick={() => setPage('home')} style={styles.backButton}>
        ← Wapis
      </button>
      <h1 style={styles.title}>🕐 Namaz ka Time</h1>
      <div style={styles.card}>
        <div style={styles.prayerRow}>
          <span>Fajr</span>
          <span>5:30 AM</span>
        </div>
        <div style={styles.prayerRow}>
          <span>Dhuhr</span>
          <span>12:30 PM</span>
        </div>
        <div style={styles.prayerRow}>
          <span>Asr</span>
          <span>4:00 PM</span>
        </div>
        <div style={styles.prayerRow}>
          <span>Maghrib</span>
          <span>6:15 PM</span>
        </div>
        <div style={styles.prayerRow}>
          <span>Isha</span>
          <span>7:45 PM</span>
        </div>
      </div>
    </div>
  );

  const TasbeehPage = () => {
    const [count, setCount] = useState(0);
    
    return (
      <div style={styles.page}>
        <button onClick={() => setPage('home')} style={styles.backButton}>
          ← Wapis
        </button>
        <h1 style={styles.title}>📿 Tasbeeh Counter</h1>
        <div style={styles.card}>
          <div style={styles.counter}>{count}</div>
          <button 
            onClick={() => setCount(count + 1)}
            style={styles.countButton}
          >
            Tap Karain
          </button>
          <button 
            onClick={() => setCount(0)}
            style={styles.resetButton}
          >
            Zero Karain
          </button>
        </div>
      </div>
    );
  };

  // Pages switch karna
  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage />;
      case 'quran': return <QuranPage />;
      case 'prayer': return <PrayerPage />;
      case 'tasbeeh': return <TasbeehPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={styles.container}>
      {renderPage()}
      <div style={styles.footer}>
        <p>© 2025 - Made with ❤️ for Ummah</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f8f0',
    fontFamily: 'Arial, sans-serif',
  },
  page: {
    padding: 20,
    maxWidth: 800,
    margin: '0 auto',
  },
  title: {
    color: '#2E8B57',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 20,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  menuButton: {
    display: 'block',
    width: '100%',
    padding: 15,
    margin: '10px 0',
    backgroundColor: '#2E8B57',
    color: 'white',
    border: 'none',
    borderRadius: 10,
    fontSize: 18,
    cursor: 'pointer',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    marginBottom: 20,
  },
  arabic: {
    fontSize: 24,
    textAlign: 'right',
    margin: '20px 0',
  },
  prayerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  counter: {
    fontSize: 60,
    textAlign: 'center',
    color: '#2E8B57',
    margin: '20px 0',
  },
  countButton: {
    padding: '20px 40px',
    fontSize: 20,
    backgroundColor: '#2E8B57',
    color: 'white',
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    width: '100%',
  },
  resetButton: {
    padding: '10px 20px',
    marginTop: 10,
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    width: '100%',
  },
  footer: {
    textAlign: 'center',
    padding: 20,
    color: '#666',
    borderTop: '1px solid #ddd',
    marginTop: 40,
  }
};

export default App;
