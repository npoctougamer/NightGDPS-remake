import { useState } from 'react';
import { comparePlayers, getFlagEmoji } from '../../utils/players';
import './compare-modal.css';

export default function CompareModal({ players, type, onClose }) {
  const [aKey, setAKey] = useState('');
  const [bKey, setBKey] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const runCompare = () => {
    if (!aKey || !bKey) {
      setError('Выбери обоих игроков');
      return;
    }
    if (aKey === bKey) {
      setError('Выбери двух разных игроков');
      return;
    }
    const a = players.find((p) => p.key === aKey);
    const b = players.find((p) => p.key === bKey);
    setResult({ a, b, ...comparePlayers(a, b) });
    setError('');
  };

  return (
    <div className="compare-overlay" onClick={onClose}>
      <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
        <button className="compare-close" onClick={onClose}>✕</button>
        <h2 className="compare-title">СРАВНЕНИЕ ИГРОКОВ</h2>

        {/* Выбор игроков */}
        <div className="compare-selects">
          <select className="compare-select" value={aKey} onChange={(e) => setAKey(e.target.value)}>
            <option value="">Игрок 1</option>
            {players.map((p) => (
              <option key={p.key} value={p.key}>{p.name}</option>
            ))}
          </select>
          <span className="compare-vs">VS</span>
          <select className="compare-select" value={bKey} onChange={(e) => setBKey(e.target.value)}>
            <option value="">Игрок 2</option>
            {players.map((p) => (
              <option key={p.key} value={p.key}>{p.name}</option>
            ))}
          </select>
        </div>

        {error && <div className="compare-error">{error}</div>}

        <button className="compare-run-btn" onClick={runCompare}>Сравнить</button>

        {/* Результат */}
        {result && (
          <div className="compare-result">
            <div className="compare-columns">
              <div className="compare-col">
                <h3>{getFlagEmoji(result.a.country)} {result.a.name}</h3>
                {type === 'slayer' ? (
                  <>
                    <p>Очков: <b>{result.a.totalPoints}</b></p>
                    <p>Демонов: <b>{result.a.completedDemons}</b></p>
                    <p>Хардест: <b>{result.a.hardestDemon}</b></p>
                  </>
                ) : (
                  <>
                    <p>CP: <b>{result.a.creatorPoints}</b></p>
                    <p>Создано: <b>{result.a.levelsCreated}</b></p>
                    <p>Верифицировано: <b>{result.a.verifiedLevels}</b></p>
                  </>
                )}
              </div>
              <div className="compare-col">
                <h3>{getFlagEmoji(result.b.country)} {result.b.name}</h3>
                {type === 'slayer' ? (
                  <>
                    <p>Очков: <b>{result.b.totalPoints}</b></p>
                    <p>Демонов: <b>{result.b.completedDemons}</b></p>
                    <p>Хардест: <b>{result.b.hardestDemon}</b></p>
                  </>
                ) : (
                  <>
                    <p>CP: <b>{result.b.creatorPoints}</b></p>
                    <p>Создано: <b>{result.b.levelsCreated}</b></p>
                    <p>Верифицировано: <b>{result.b.verifiedLevels}</b></p>
                  </>
                )}
              </div>
            </div>

            {/* Общие уровни — только для слееров */}
            {type === 'slayer' && (
              <div className="compare-common">
                <h4>✅ Пройдено обоими ({result.common.length}):</h4>
                {result.common.length > 0 ? (
                  <div className="compare-tags">
                    {result.common.map((level) => (
                      <span key={level} className="compare-tag both">{level}</span>
                    ))}
                  </div>
                ) : (
                  <p className="compare-empty">Нет общих уровней</p>
                )}
              </div>
            )}

            {type === 'slayer' && (
              <div className="compare-unique">
                <div>
                  <h4>Только у {result.a.name} ({result.onlyA.length}):</h4>
                  <div className="compare-tags">
                    {result.onlyA.length > 0 ? (
                      result.onlyA.map((level) => (
                        <span key={level} className="compare-tag a">{level}</span>
                      ))
                    ) : (
                      <p className="compare-empty">—</p>
                    )}
                  </div>
                </div>
                <div>
                  <h4>Только у {result.b.name} ({result.onlyB.length}):</h4>
                  <div className="compare-tags">
                    {result.onlyB.length > 0 ? (
                      result.onlyB.map((level) => (
                        <span key={level} className="compare-tag b">{level}</span>
                      ))
                    ) : (
                      <p className="compare-empty">—</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
