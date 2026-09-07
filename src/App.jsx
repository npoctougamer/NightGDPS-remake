import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import DemonListPage from './pages/DemonListPage';
import ChallengeListPage from './pages/ChallengeListPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demons" element={<DemonListPage />} />
            <Route path="/challenges" element={<ChallengeListPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
