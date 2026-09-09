import { useEffect, useState } from 'react';
import './home-page.css';

export default function HomePage() {
  const [stats, setStats] = useState({
    demons: 0,
    challenges: 0,
    players: 0,
    records: 0,
    creators: 0,
  });

  // Пока используем фейковые данные, потом подключим Firebase
  useEffect(() => {
    setStats({
      demons: 127,
      challenges: 45,
      players: 234,
      records: 1567,
      creators: 89,
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-logo">🌙</div>
          <h1 className="hero-title">NIGHT GDPS</h1>
          <p className="hero-subtitle">Official Global Demon List</p>
          <p className="hero-description">
            Официальный лист демонов сервера Night GDPS. Рейтинг игроков, рекорды и лучшие уровни.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">СТАТИСТИКА СЕРВЕРА</h2>
        <div className="stats-grid">
          <StatCard icon="👹" label="Демоны" value={stats.demons} />
          <StatCard icon="🔥" label="Челленджи" value={stats.challenges} />
          <StatCard icon="👥" label="Игроки" value={stats.players} />
          <StatCard icon="🏆" label="Рекорды" value={stats.records} />
          <StatCard icon="🛠️" label="Создатели" value={stats.creators} />
        </div>
      </section>

      {/* Recent Changes Section */}
      <section className="recent-section">
        <h2 className="section-title">Недавние изменения</h2>
        <div className="recent-list">
          <RecentItem 
            type="new" 
            text="Новый демон 'Cosmic Chaos' добавлен на #23 позицию"
            time="2 часа назад"
          />
          <RecentItem 
            type="record" 
            text="Player123 прошёл 'Eternal Darkness' (100%, 5432 попытки)"
            time="5 часов назад"
          />
          <RecentItem 
            type="move" 
            text="'Abyssal Terror' перемещён с #15 на #12"
            time="1 день назад"
          />
        </div>
      </section>
    </div>
  );
}

// Вспомогательный компонент для статистики
function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value.toLocaleString()}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// Вспомогательный компонент для недавних изменений
function RecentItem({ type, text, time }) {
  const icons = {
    new: '✨',
    record: '🏆',
    move: '📊',
  };

  return (
    <div className="recent-item">
      <div className="recent-icon">{icons[type]}</div>
      <div className="recent-content">
        <div className="recent-text">{text}</div>
        <div className="recent-time">{time}</div>
      </div>
    </div>
  );
}
