import PlayerRow from '../components/players/PlayerRow';
import { mockCreatorsTop } from '../data/mockData';
import './list-page.css';

export default function TopCreatorsPage() {
  return (
    <div className="list-page">
      <div className="list-page-header">
        <h1 className="list-page-title">🛠️ ТОП КРЕАТОРОВ</h1>
        <p className="list-page-subtitle">Лучшие создатели уровней сервера</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="players-list">
          {mockCreatorsTop.map((player, index) => (
            <PlayerRow
              key={player.key}
              player={player}
              index={index}
              type="creator"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
