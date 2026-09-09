import LevelRow from './LevelRow';

export default function LevelList({ levels = [], onDetails }) {
  if (!levels || levels.length === 0) {
    return (
      <div className="level-grid-empty">
        <div className="empty-icon">📭</div>
        <p className="empty-text">Уровни не найдены</p>
      </div>
    );
  }

  return (
    <div className="level-list">
      {levels.map((level, index) => (
        <LevelRow
          key={level.key || index}
          level={level}
          index={index}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}
