import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌙</span>
          <span className="logo-text">Night GDPS</span>
        </Link>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Главная</Link></li>
          <li><Link to="/demons" onClick={() => setIsOpen(false)}>Demon List</Link></li>
          <li><Link to="/challenges" onClick={() => setIsOpen(false)}>Challenge List</Link></li>
          <li><Link to="/impossible" onClick={() => setIsOpen(false)}>Impossible</Link></li>
          <li><Link to="/slayers" onClick={() => setIsOpen(false)}>Топ Слееров</Link></li>
          <li><Link to="/creators" onClick={() => setIsOpen(false)}>Топ Креаторов</Link></li>
        </ul>
      </div>
    </nav>
  );
}
