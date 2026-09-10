// Чистые функции для работы с игроками.
// Ничего не знают про React — их легко переиспользовать и тестировать.

// Код страны (RU) -> флаг эмодзи (🇷)
export function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🏳️';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

// Поиск по нику + фильтр по стране
export function filterPlayers(players, query, country) {
  const q = (query || '').trim().toLowerCase();
  return players.filter((player) => {
    if (q && !(player.name || '').toLowerCase().includes(q)) return false;
    if (country !== 'all' && player.country !== country) return false;
    return true;
  });
}

// Сортировка по выбранному критерию (лучшие сверху)
export function sortPlayers(players, sortBy) {
  const list = [...players];
  switch (sortBy) {
    case 'points':
      return list.sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0));
    case 'demons':
      return list.sort((a, b) => (b.completedDemons || 0) - (a.completedDemons || 0));
    case 'hardest':
      return list.sort((a, b) => (b.hardestPoints || 0) - (a.hardestPoints || 0));
    case 'cp':
      return list.sort((a, b) => (b.creatorPoints || 0) - (a.creatorPoints || 0));
    case 'levels':
      return list.sort((a, b) => (b.levelsCreated || 0) - (a.levelsCreated || 0));
    case 'verified':
      return list.sort((a, b) => (b.verifiedLevels || 0) - (a.verifiedLevels || 0));
    default:
      return list;
  }
}

// Топ стран: суммируем показатели игроков по странам
export function buildCountryTop(players) {
  const map = {};
  players.forEach((player) => {
    const code = player.country || '??';
    if (!map[code]) {
      map[code] = { country: code, players: 0, demons: 0, points: 0 };
    }
    map[code].players += 1;
    map[code].demons += player.completedDemons || 0;
    map[code].points += player.totalPoints || 0;
  });
  return Object.values(map).sort((a, b) => b.points - a.points);
}

// Сравнение двух игроков: общие и уникальные пройденные уровни
export function comparePlayers(a, b) {
  const aLevels = a.completedLevels || [];
  const bLevels = b.completedLevels || [];
  const common = aLevels.filter((level) => bLevels.includes(level));
  const onlyA = aLevels.filter((level) => !bLevels.includes(level));
  const onlyB = bLevels.filter((level) => !aLevels.includes(level));
  return { common, onlyA, onlyB };
}
