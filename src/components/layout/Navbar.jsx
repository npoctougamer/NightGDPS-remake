import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// Ссылка на хостинг GDPS (dashboard)
const DASHBOARD_URL = 'https://glowhosting.ru/gd/utypdf/dashboard';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌙</span>
          <span className="logo-text">Night GDPS</span>
        </Link>

        <div className="navbar-right">
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Главная</Link></li>
            <li><Link to="/demons" onClick={() => setIsOpen(false)}>Demon List</Link></li>
            <li><Link to="/challenges" onClick={() => setIsOpen(false)}>Challenge List</Link></li>
            <li><Link to="/impossible" onClick={() => setIsOpen(false)}>Impossible</Link></li>
            <li><Link to="/slayers" onClick={() => setIsOpen(false)}>Топ Слееров</Link></li>
            <li><Link to="/creators" onClick={() => setIsOpen(false)}>Топ Креаторов</Link></li>
          </ul>

          {/* Кнопки справа: Dashboard + Вход */}
          <div className="navbar-actions">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-dashboard-btn"
            >
              Dashboard
            </a>
            <button
              className="nav-login-btn"
              onClick={() => alert('Система аккаунтов появится на следующем шаге!')}
            >
              Войти
            </button>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
