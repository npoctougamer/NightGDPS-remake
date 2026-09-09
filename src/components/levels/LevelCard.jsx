import './level-card.css';

export default function LevelCard({ level, index, onDetails }) {
  const { name, author, verifier, img, points, status, tag } = level;

  const getStatusColor = () => {
    switch (status) {
      case 'legacy': return '#fbbf24';
      case 'watch': return '#60a5fa';
      case 'frozen': return '#94a3b8';
      default: return '#10b981';
    }
  };

  const imageUrl = img || 'https://placehold.co/400x225/1a1b2e/a78bfa?text=No+Image';

  return (
    <div className="level-card" onClick={() => onDetails && onDetails(level)}>
      <div className="level-position">#{index + 1}</div>

      <div className="level-image-wrapper">
        <img
          src={imageUrl}
          alt={name}
          className="level-image"
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x225/1a1b2e/a78bfa?text=No+Image';
          }}
        />
        {tag && <div className="level-tag">{tag}</div>}
        {status && status !== 'active' && (
          <div className="level-status" style={{ backgroundColor: getStatusColor() }}>
            {status.toUpperCase()}
          </div>
        )}
      </div>

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

        <div className="level-points">
          <span className="points-icon">⚡</span>
          <span className="points-value">{points || '0.00'}</span>
          <span className="points-label">баллов</span>
        </div>
      </div>
    </div>
  );
}
