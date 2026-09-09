import './player-row.css';

export default function PlayerRow({ player, index, type = 'slayer' }) {
  const {
    name,
    country,
    completedDemons,
    completedChallenges,
    totalPoints,
    hardestDemon,
    creatorPoints,
    levelsCreated,
    verifiedLevels,
    hardestLevel,
  } = player;

  // Медали для топ-3
  const medals = ['🥇', '🥈', '🥉'];
  const medal = index < 3 ? medals[index] : null;

  // Флаг из кода страны (эмодзи)
  const countryFlag = country ? getFlagEmoji(country) : '🏳️';

  return (
    <div className={`player-row ${index < 3 ? 'player-row-top' : ''}`}>
      {/* Позиция */}
      <div className="player-position">
        {medal || <span className="pos-number">#{index + 1}</span>}
      </div>

      {/* Информация */}
      <div className="player-info">
        <div className="player-name-row">
          <span className="player-flag">{countryFlag}</span>
          <h3 className="player-name">{name}</h3>
        </div>

        {type === 'slayer' ? (
          <div className="player-stats">
            <div className="stat-item">
              <span className="stat-value">{completedDemons}</span>
              <span className="stat-label">демонов</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{completedChallenges}</span>
              <span className="stat-label">челленджей</span>
            </div>
            <div className="stat-item">
              <span className="stat-value highlight">{totalPoints.toFixed(1)}</span>
              <span className="stat-label">очков</span>
            </div>
            {hardestDemon && (
              <div className="stat-item hardest">
                <span className="stat-label">Сложнейший:</span>
                <span className="stat-value">{hardestDemon}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="player-stats">
            <div className="stat-item">
              <span className="stat-value">{creatorPoints}</span>
              <span className="stat-label">CP</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{levelsCreated}</span>
              <span className="stat-label">создано</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{verifiedLevels}</span>
              <span className="stat-label">верифицировано</span>
            </div>
            {hardestLevel && (
              <div className="stat-item hardest">
                <span className="stat-label">Топ уровень:</span>
                <span className="stat-value">{hardestLevel}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Конвертируем код страны (RU, UA, DE) в флаг эмодзи
function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🏳️';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
