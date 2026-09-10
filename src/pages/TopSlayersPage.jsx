import PlayersBrowser from '../components/players/PlayersBrowser';
import { mockSlayers } from '../data/mockData';
import './list-page.css';

export default function TopSlayersPage() {
  return (
    <div className="list-page">
      <PlayersBrowser
        players={mockSlayers}
        type="slayer"
        title="🏆 ТОП СЛЕЕРОВ"
        subtitle="Лучшие игроки сервера по рекордам"
      />
    </div>
  );
}
