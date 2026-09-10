import PlayersBrowser from '../components/players/PlayersBrowser';
import { mockCreatorsTop } from '../data/mockData';
import './list-page.css';

export default function TopCreatorsPage() {
  return (
    <div className="list-page">
      <PlayersBrowser
        players={mockCreatorsTop}
        type="creator"
        title="🛠️ ТОП КРЕАТОРОВ"
        subtitle="Лучшие создатели уровней сервера"
      />
    </div>
  );
}
