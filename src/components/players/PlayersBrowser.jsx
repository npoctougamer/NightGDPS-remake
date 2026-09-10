import { useMemo, useState } from 'react';
import SearchBar from '../levels/SearchBar';
import PlayerRow from './PlayerRow';
import CompareModal from './CompareModal';
import {
  filterPlayers,
  sortPlayers,
  buildCountryTop,
  getFlagEmoji,
} from '../../utils/players';
import './players-browser.css';

// Варианты сортировки для каждого типа топа
const SORT_OPTIONS = {
  slayer: [
    { value: 'points', label: 'По очкам' },
    { value: 'demons', label: 'По пройденным демонам' },
    { value: 'hardest', label: 'По хардесту' },
  ],
  creator: [
    { value: 'cp', label: 'По креаторским очкам' },
    { value: 'levels', label: 'По созданным уровням' },
    { value: 'verified', label: 'По верифицированным' },
  ],
};

export default function PlayersBrowser({ players = [], type = 'slayer', title, subtitle }) {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[type][0].value);
  const [country, setCountry] = useState('all');
  const [view, setView] = useState('players'); // 'players' | 'countries'
  const [showCompare, setShowCompare] = useState(false);

  // Уникальные страны для фильтра
  const countries = useMemo(
    () => [...new Set(players.map((p) => p.country).filter(Boolean))].sort(),
    [players]
  );

  const filteredPlayers = useMemo(
    () => filterPlayers(players, query, country),
    [players, query, country]
  );

  const sortedPlayers = useMemo(
    () => sortPlayers(filteredPlayers, sortBy),
    [filteredPlayers, sortBy]
  );

  const countryTop = useMemo(
    () => buildCountryTop(filteredPlayers),
    [filteredPlayers]
  );

  return (
    <div className="players-browser">
      {/* Заголовок */}
      <div className="list-page-header">
        <h1 className="list-page-title">{title}</h1>
        <p className="list-page-subtitle">{subtitle}</p>
      </div>

      {/* Панель управления */}
      <div className="players-toolbar">
        <SearchBar value={query} onChange={setQuery} placeholder="Поиск игрока..." />

        <select
          className="players-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {SORT_OPTIONS[type].map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <select
          className="players-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="all">🌍 Все страны</option>
          {countries.map((code) => (
            <option key={code} value={code}>
              {getFlagEmoji(code)} {code}
            </option>
          ))}
        </select>

        <button className="compare-open-btn" onClick={() => setShowCompare(true)}>
          ⚔️ Сравнить
        </button>
      </div>

      {/* Переключатель: игроки / топ стран */}
      <div className="players-view-pills">
        <button
          className={`view-pill ${view === 'players' ? 'active' : ''}`}
          onClick={() => setView('players')}
        >
          Игроки ({sortedPlayers.length})
        </button>
        <button
          className={`view-pill ${view === 'countries' ? 'active' : ''}`}
          onClick={() => setView('countries')}
        >
          Топ стран ({countryTop.length})
        </button>
      </div>

      {/* Контент */}
      {view === 'players' ? (
        <div className="players-list">
          {sortedPlayers.map((player, index) => (
            <PlayerRow key={player.key} player={player} index={index} type={type} />
          ))}
          {sortedPlayers.length === 0 && (
            <div className="players-empty">Игроки не найдены 😕</div>
          )}
        </div>
      ) : (
        <div className="players-list">
          {countryTop.map((row, index) => (
            <div key={row.country} className="country-row">
              <div className="player-position">
                <span className="pos-number">#{index + 1}</span>
              </div>
              <div className="country-flag">{getFlagEmoji(row.country)}</div>
              <div className="player-info">
                <div className="player-name-row">
                  <h3 className="player-name">{row.country}</h3>
                </div>
                <div className="player-stats">
                  <div className="stat-item">
                    <span className="stat-value">{row.players}</span>
                    <span className="stat-label">игроков</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{row.demons}</span>
                    <span className="stat-label">демонов</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value highlight">{row.points.toFixed(1)}</span>
                    <span className="stat-label">очков</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Модалка сравнения */}
      {showCompare && (
        <CompareModal
          players={players}
          type={type}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
