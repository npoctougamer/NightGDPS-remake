import LevelCard from './LevelCard';
import './level-grid.css';

export default function LevelGrid({ levels = [] }) {
  if (!levels || levels.length === 0) {
    return (
      <div className="level-grid-empty">
        <div className="empty-icon">📭</div>
        <p className="empty-text">Уровни не найдены</p>
      </div>
    );
  }

  return (
    <div className="level-grid">
      {levels.map((level, index) => (
        <LevelCard 
          key={level.key || index} 
          level={level} 
          index={index}
        />
      ))}
    </div>
  );
}
