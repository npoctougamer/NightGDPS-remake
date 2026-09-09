import { DEFAULT_FILTERS } from '../../utils/filters';

const STATUS_OPTIONS = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'legacy', label: 'Легасится' },
  { value: 'watch', label: 'Наблюдение' },
  { value: 'frozen', label: 'Заморожен' },
];

export default function LevelFilters({ filters, onChange }) {
  const update = (patch) => onChange({ ...filters, ...patch });

  return (
    <div className="filters-panel">
      {/* Статус */}
      <div className="filters-row">
        <span className="filters-label">Статус</span>
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`status-pill ${filters.status === opt.value ? 'active' : ''}`}
            onClick={() => update({ status: opt.value })}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Баллы */}
      <div className="filters-row">
        <span className="filters-label">Баллы</span>
        <input
          className="pts-input"
          type="number"
          placeholder="от"
          value={filters.ptsMin}
          onChange={(e) => update({ ptsMin: e.target.value })}
        />
        <span className="row-arrow">—</span>
        <input
          className="pts-input"
          type="number"
          placeholder="до"
          value={filters.ptsMax}
          onChange={(e) => update({ ptsMax: e.target.value })}
        />
      </div>

      {/* Чекбоксы + сброс */}
      <div className="filters-row">
        <label className="filter-check">
          <input
            type="checkbox"
            checked={filters.verifiedOnly}
            onChange={(e) => update({ verifiedOnly: e.target.checked })}
          />
          Только верифицированные
        </label>
        <label className="filter-check">
          <input
            type="checkbox"
            checked={filters.newOnly}
            onChange={(e) => update({ newOnly: e.target.checked })}
          />
          Только новые
        </label>
        <button className="filters-reset" onClick={() => onChange({ ...DEFAULT_FILTERS })}>
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
}
