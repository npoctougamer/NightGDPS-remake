import PlayerRow from '../components/players/PlayerRow';
import { mockSlayers } from '../data/mockData';
import './list-page.css';

export default function TopSlayersPage() {
  return (
    <div className="list-page">
      <div className="list-page-header">
        <h1 className="list-page-title">🏆 ТОП СЛЕЕРОВ</h1>
        <p className="list-page-subtitle">Лучшие игроки сервера по рекордам</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="players-list">
          {mockSlayers.map((player, index) => (
            <PlayerRow
              key={player.key}
              player={player}
              index={index}
              type="slayer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
