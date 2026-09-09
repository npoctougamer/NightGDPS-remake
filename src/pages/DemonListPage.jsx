import LevelsBrowser from '../components/levels/LevelsBrowser';
import { mockDemons } from '../data/mockData';
import './list-page.css';

export default function DemonListPage() {
  return (
    <div className="list-page">
      <LevelsBrowser
        levels={mockDemons}
        title="СПИСОК ДЕМОНОВ"
        subtitle="✦ TOP 50 ✦"
      />
    </div>
  );
}
