import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockReviews } from '../data/mockData';
import './home-page.css';

// TODO: вставь сюда ID трейлера с YouTube.
// ID — это то, что идёт после "v=" в ссылке: https://www.youtube.com/watch?v=ВОТ_ЭТО
// Пока пусто — показывается красивая карточка-ссылка на канал.
const TRAILER_VIDEO_ID = '';
const TRAILER_URL = 'https://www.youtube.com/@NightGDPS';

export default function HomePage() {
  // useState — это "память" компонента (данные, которые могут меняться)
  const [stats, setStats] = useState({
    demons: 0,
    challenges: 0,
    players: 0,
    records: 0,
    creators: 0,
  });

  // useEffect — код, который выполняется один раз после открытия страницы
  useEffect(() => {
    // Здесь потом будем загружать реальную статистику из Firebase
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
      {/* ===== HERO СЕКЦИЯ (шапка) ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-subtitle-top">GEOMETRY DASH PRIVATE SERVER</div>
          <div className="hero-logo">🌙</div>
          <h1 className="hero-title">NIGHT GDPS</h1>
        </div>

        {/* Кнопки быстрого перехода к спискам */}
        <div className="quick-access">
          <Link to="/demons" className="quick-btn">
            <span className="quick-icon">👹</span>
            <span className="quick-label">Demon List</span>
          </Link>
          <Link to="/challenges" className="quick-btn">
            <span className="quick-icon">🔥</span>
            <span className="quick-label">Challenge List</span>
          </Link>
          <Link to="/impossible" className="quick-btn">
            <span className="quick-icon">💀</span>
            <span className="quick-label">Impossible List</span>
          </Link>
          <Link to="/slayers" className="quick-btn">
            <span className="quick-icon">⚔️</span>
            <span className="quick-label">Top Slayers</span>
          </Link>
          <Link to="/creators" className="quick-btn">
            <span className="quick-icon">🛠️</span>
            <span className="quick-label">Top Creators</span>
          </Link>
        </div>

        {/* Кнопки соцсетей и скачивания */}
        <div className="social-links">
          <a
            href="#"
            className="social-btn social-discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">💬</span>
            <span className="social-label">Discord</span>
          </a>
          <a
            href="#"
            className="social-btn social-telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">✈️</span>
            <span className="social-label">Telegram</span>
          </a>
          <a
            href="#"
            className="social-btn social-download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">⬇️</span>
            <span className="social-label">Скачать GDPS</span>
          </a>
        </div>
      </section>

      {/* ===== СТАТИСТИКА СЕРВЕРА ===== */}
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

      {/* ===== СКАЧАТЬ ИГРУ ===== */}
      <section className="download-section">
        <h2 className="section-title">СКАЧАТЬ ИГРУ</h2>
        <p className="download-version">Версия 2.2081</p>
        <div className="download-buttons">
          <a href="#" className="download-btn download-pc">
            <span className="download-icon">💻</span>
            <div className="download-info">
              <span className="download-platform">PC / Windows</span>
              <span className="download-hint">Скачать .zip архив для игры на компьютере</span>
            </div>
          </a>
          <a href="#" className="download-btn download-android">
            <span className="download-icon">📱</span>
            <div className="download-info">
              <span className="download-platform">Android</span>
              <span className="download-hint">Скачать .apk файл для игры на телефоне</span>
            </div>
          </a>
        </div>
      </section>

      {/* ===== ТРЕЙЛЕР ===== */}
      <section className="trailer-section">
        <h2 className="section-title">Трейлер Night GDPS</h2>
        {TRAILER_VIDEO_ID ? (
          <div className="trailer-wrapper">
            <iframe
              className="trailer-iframe"
              src={`https://www.youtube.com/embed/${TRAILER_VIDEO_ID}`}
              title="Трейлер Night GDPS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <a href={TRAILER_URL} target="_blank" rel="noopener noreferrer" className="trailer-card">
            <div className="trailer-play">▶</div>
            <div className="trailer-card-title">🔥 Активный Приватный Сервер | Night GDPS</div>
            <div className="trailer-card-hint">Смотреть на YouTube</div>
          </a>
        )}
      </section>

      {/* ===== ОТЗЫВЫ ИГРОКОВ ===== */}
      <section className="reviews-section">
        <h2 className="section-title">Отзывы игроков</h2>
        <div className="reviews-grid">
          {mockReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">🌙</div>
                <div>
                  <div className="review-name">{review.author}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
              <div className="review-text">{review.text}</div>
            </div>
          ))}
        </div>
        <p className="reviews-note">
          Форма отправки отзывов появится после подключения Firebase (Фаза 2)
        </p>
      </section>

      {/* ===== НЕДАВНИЕ ИЗМЕНЕНИЯ ===== */}
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

// ===== ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ (используются только на этой странице) =====

// Карточка статистики (Демоны: 127 и т.д.)
function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value.toLocaleString()}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// Строка недавнего изменения
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
