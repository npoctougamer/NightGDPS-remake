// Фильтры по умолчанию
export const DEFAULT_FILTERS = {
  status: 'all',       // 'all' | 'active' | 'legacy' | 'watch' | 'frozen'
  ptsMin: '',          // минимальные баллы (строка из input)
  ptsMax: '',          // максимальные баллы
  verifiedOnly: false, // только с верифером
  newOnly: false,      // только добавленные за последние 7 дней
};

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Чистая функция: принимает список уровней и возвращает отфильтрованный.
// Не знает ничего про React и DOM — поэтому её легко тестировать.
export function filterLevels(levels, query, filters) {
  const q = (query || '').trim().toLowerCase();
  const now = Date.now();

  return levels.filter((level) => {
    // 1. Поиск по названию, автору и тегу
    if (q) {
      const inName = (level.name || '').toLowerCase().includes(q);
      const inAuthor = (level.author || '').toLowerCase().includes(q);
      const inTag = (level.tag || '').toLowerCase().includes(q);
      if (!inName && !inAuthor && !inTag) return false;
    }

    // 2. Статус
    if (filters.status !== 'all') {
      const status = level.status || 'active';
      if (status !== filters.status) return false;
    }

    // 3. Диапазон баллов
    const pts = parseFloat(level.points);
    if (filters.ptsMin !== '' && (isNaN(pts) || pts < parseFloat(filters.ptsMin))) return false;
    if (filters.ptsMax !== '' && (isNaN(pts) || pts > parseFloat(filters.ptsMax))) return false;

    // 4. Только верифицированные
    if (filters.verifiedOnly && !(level.verifier && level.verifier.trim())) return false;

    // 5. Только новые (за последние 7 дней)
    if (filters.newOnly && !(level.addedAt && now - level.addedAt <= WEEK_MS)) return false;

    return true;
  });
}

// Сколько активных фильтров сейчас включено (для значка на кнопке)
export function countActiveFilters(filters) {
  let count = 0;
  if (filters.status !== 'all') count++;
  if (filters.ptsMin !== '') count++;
  if (filters.ptsMax !== '') count++;
  if (filters.verifiedOnly) count++;
  if (filters.newOnly) count++;
  return count;
}
