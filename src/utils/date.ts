/** "May 12, 2025" */
export function formatDate(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** ISO date string (for <time datetime>) */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}
