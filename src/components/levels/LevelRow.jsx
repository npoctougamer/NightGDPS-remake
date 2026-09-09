import './level-row.css';

const STATUS_LABELS = {
  legacy: 'LEGACY',
  watch: 'WATCH',
  frozen: 'FROZEN',
};

export default function LevelRow({ level, index, onDetails }) {
  const {
    name,
    author,
    verifier,
    levelID,
    tag,
    img,
    points,
    oldPoints,
    status,
  } = level;

  const imageUrl = img || 'https://placehold.co/400x225/1a1b2e/a78bfa?text=No+Image';

  return (
    <div className="level-row">
      {/* Превью слева */}
      <div className="level-row-thumb">
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            e.target.src = 'https://placehold.co/400x225/1a1b2e/a78bfa?text=No+Image';
          }}
        />
        {tag && <span className="row-tag">{tag}</span>}
      </div>

      {/* Информация справа */}
      <div className="level-row-body">
        {/* Строка 1: позиция + название + статус */}
        <div className="row-line-1">
          <span className="row-position">#{index + 1}</span>
          <h3 className="row-name">{name}</h3>
          {status && status !== 'active' && (
            <span className={`row-status-badge status-${status}`}>
              {STATUS_LABELS[status]}
            </span>
          )}
        </div>

        {/* Строка 2: автор | верифер | баллы */}
        <div className="row-line-2">
          <span className="row-author">{author || 'Unknown'}</span>
          {verifier && (
            <>
              <span className="row-sep">|</span>
              <span className="row-verifier">{verifier}</span>
            </>
          )}
          {oldPoints && (
            <>
              <span className="row-points-old">{oldPoints}</span>
              <span className="row-arrow">→</span>
            </>
          )}
          <span className="row-points-new">{points || '0.00'}</span>
          <span className="row-pts">pts</span>
        </div>

        {/* Строка 3: ID уровня + кнопка подробнее */}
        <div className="row-line-3">
          {levelID && <span className="row-id-badge"># {levelID}</span>}
          <button
            className="row-details-btn"
            onClick={() => onDetails && onDetails(level)}
          >
            ПОДРОБНЕЕ
          </button>
        </div>
      </div>
    </div>
  );
}
