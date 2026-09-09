import LevelGrid from '../components/levels/LevelGrid';
import './demon-list-page.css';

export default function DemonListPage() {
  // Фейковые данные для теста
  const testDemons = [
    {
      key: '1',
      name: 'Cosmic Chaos',
      author: 'LichiGMDJ',
      verifier: 'ProPlayer',
      img: 'https://i.imgur.com/8QqQz1p.png',
      points: '150.50',
      status: 'active',
      tag: 'Top 1',
    },
    {
      key: '2',
      name: 'Eternal Darkness',
      author: 'Creator123',
      verifier: 'SpeedRunner',
      img: 'https://i.imgur.com/9RrQz2p.png',
      points: '145.75',
      status: 'watch',
    },
    {
      key: '3',
      name: 'Abyssal Terror',
      author: 'DarkMaster',
      verifier: 'EliteGamer',
      img: 'https://i.imgur.com/7WqQz3p.png',
      points: '140.25',
      status: 'legacy',
    },
    {
      key: '4',
      name: 'Neon Nightmare',
      author: 'PixelArtist',
      verifier: 'Champion',
      img: 'https://i.imgur.com/6VqQz4p.png',
      points: '135.80',
    },
    {
      key: '5',
      name: 'Quantum Quake',
      author: 'PhysicsWiz',
      verifier: 'MasterPlayer',
      img: 'https://i.imgur.com/5UqQz5p.png',
      points: '130.90',
      status: 'frozen',
    },
    {
      key: '6',
      name: 'Infernal Inferno',
      author: 'FireLord',
      verifier: 'DemonSlayer',
      img: 'https://i.imgur.com/4TqQz6p.png',
      points: '125.45',
    },
  ];

  return (
    <div className="demon-list-page">
      <div className="page-header">
        <h1 className="page-title">✦ DEMON LIST ✦</h1>
        <p className="page-subtitle">TOP 50 самых сложных демонов сервера</p>
      </div>

      <LevelGrid levels={testDemons} />
    </div>
  );
}
