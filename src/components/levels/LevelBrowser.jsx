import { useMemo, useState } from 'react';
import ListTabs from './ListTabs';
import SearchBar from './SearchBar';
import LevelFilters from './LevelFilters';
import LevelList from './LevelList';
import LevelGrid from './LevelGrid';
import { DEFAULT_FILTERS, filterLevels, countActiveFilters } from '../../utils/filters';
import './levels-browser.css';

export default function LevelsBrowser({ levels = [], title, subtitle }) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'

  // useMemo: пересчитывать только когда меняются данные/поиск/фильтры
  const filteredLevels = useMemo(
    () => filterLevels(levels, query, filters),
    [levels, query, filters]
  );

  const activeFilters = countActiveFilters(filters);

  const handleDetails = (level) => {
    // TODO: на этапе 2.4 заменим на открытие модального окна
    alert(`Подробности уровня "${level.name}" появятся на этапе 2.4`);
  };

  return (
    <div className="levels-browser">
      {/* Заголовок */}
      <div className="browser-header">
        <h1 className="browser-title">{title}</h1>
        {subtitle && <p className="browser-subtitle">{subtitle}</p>}
      </div>

      {/* Вкладки */}
      <ListTabs />

      {/* Панель инструментов: фильтры + поиск + переключатель вида */}
      <div className="browser-toolbar">
        <button
          className={`toolbar-filter-btn ${showFilters ? 'active' : ''}`}
          onClick={() => setShowFilters((v) => !v)}
          title="Фильтры"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="3" width="14" height="1.5" rx="0.75" />
            <circle cx="5" cy="3.75" r="2" />
            <rect x="1" y="11" width="14" height="1.5" rx="0.75" />
            <circle cx="11" cy="11.75" r="2" />
          </svg>
          {activeFilters > 0 && <span className="filter-badge">{activeFilters}</span>}
        </button>

        <SearchBar value={query} onChange={setQuery} />

        <div className="view-toggle">
          <button
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
            title="Список"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="2" width="14" height="2" rx="1" />
              <rect x="1" y="7" width="14" height="2" rx="1" />
              <rect x="1" y="12" width="14" height="2" rx="1" />
            </svg>
          </button>
          <button
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
            title="Сетка"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1" />
              <rect x="9" y="1" width="6" height="6" rx="1" />
              <rect x="1" y="9" width="6" height="6" rx="1" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Панель фильтров (показывается по кнопке) */}
      {showFilters && <LevelFilters filters={filters} onChange={setFilters} />}

      {/* Счётчик */}
      <div className="browser-count">Найдено: {filteredLevels.length}</div>

      {/* Список или сетка */}
      {viewMode === 'list' ? (
        <LevelList levels={filteredLevels} onDetails={handleDetails} />
      ) : (
        <LevelGrid levels={filteredLevels} onDetails={handleDetails} />
      )}
    </div>
  );
}
