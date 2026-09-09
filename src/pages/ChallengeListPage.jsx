import LevelsBrowser from '../components/levels/LevelsBrowser';
import { mockChallenges } from '../data/mockData';
import './list-page.css';

export default function ChallengeListPage() {
  return (
    <div className="list-page">
      <LevelsBrowser
        levels={mockChallenges}
        title="СПИСОК ЧЕЛЛЕНДЖЕЙ"
        subtitle="✦ ЛУЧШИЕ ИСПЫТАНИЯ ✦"
      />
    </div>
  );
}
