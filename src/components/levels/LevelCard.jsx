import { Link } from 'react-router-dom';
import './level-card.css';

export default function LevelCard({ level, index }) {
  const {
    name,
    author,
    verifier,
    img,
    points,
    status,
    tag,
    key,
  } = level;

  // Определяем цвет статуса
  const getStatusColor = () => {
    switch (status) {
      case 'legacy':
        return '#fbbf24'; // жёлтый
      case 'watch':
        return '#60a5fa'; // синий
      case 'frozen':
        return '#94a3b8'; // серый
      default:
        return '#10b981'; // зелёный (active)
    }
  };

  // Форматируем баллы
  const formatPoints = (pts) => {
    if (!pts) return 'N/A';
    const num = parseFloat(pts);
    return isNaN(num) ? pts : num.toFixed(2);
  };

  // Дефолтная картинка если нет img
  const imageUrl = img || 'https://via.placeholder.com/400x225/1a1b2e/a78bfa?text=No+Image';

  return (
    <Link to={`/demon/${key}`} className="level-card">
      {/* Позиция */}
      <div className="level-position">
        #{index + 1}
      </div>

      {/* Картинка уровня */}
      <div className="level-image-wrapper">
        <img 
          src={imageUrl} 
          alt={name} 
          className="level-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x225/1a1b2e/a78bfa?text=No+Image';
          }}
        />
        
        {/* Тег если есть */}
        {tag && (
          <div className="level-tag">{tag}</div>
        )}

        {/* Статус */}
        {status && (
          <div 
            className="level-status"
            style={{ backgroundColor: getStatusColor() }}
          >
            {status === 'legacy' && 'LEGACY'}
            {status === 'watch' && 'WATCH'}
            {status === 'frozen' && 'FROZEN'}
          </div>
        )}
      </div>

      {/* Информация */}
      <div className="level-info">
        <h3 className="level-name">{name}</h3>
        
        <div className="level-meta">
          <div className="level-author">
            <span className="meta-label">Автор:</span>
            <span className="meta-value">{author || 'Unknown'}</span>
          </div>
          
          {verifier && (
            <div className="level-verifier">
              <span className="meta-label">Верифер:</span>
              <span className="meta-value">{verifier}</span>
            </div>
          )}
        </div>

        {/* Баллы */}
        <div className="level-points">
          <span className="points-icon">⚡</span>
          <span className="points-value">{formatPoints(points)}</span>
          <span className="points-label">баллов</span>
        </div>
      </div>
    </Link>
  );
}
