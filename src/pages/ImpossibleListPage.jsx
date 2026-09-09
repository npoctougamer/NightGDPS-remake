import LevelsBrowser from '../components/levels/LevelsBrowser';
import { mockImpossibles } from '../data/mockData';
import './list-page.css';

export default function ImpossibleListPage() {
  return (
    <div className="list-page">
      <LevelsBrowser
        levels={mockImpossibles}
        title="IMPOSSIBLE LIST"
        subtitle="✦ ЗА ГРАНЬЮ ВОЗМОЖНОГО ✦"
      />
    </div>
  );
}
