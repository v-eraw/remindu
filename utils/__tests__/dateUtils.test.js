import { formatDate, isToday, isPast } from '../dateUtils';

describe('Date Utilities', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date(Date.UTC(2024, 0, 1)); // January 1, 2024 UTC
      expect(formatDate(date)).toBe('January 1, 2024');
    });

    it('handles invalid date', () => {
      expect(formatDate('invalid')).toBe('Invalid Date');
    });
  });

  describe('isToday', () => {
    it('returns true for today', () => {
      const today = new Date();
      expect(isToday(today)).toBe(true);
    });

    it('returns false for other days', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(isToday(tomorrow)).toBe(false);
    });
  });

  describe('isPast', () => {
    it('returns true for past dates', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      expect(isPast(pastDate)).toBe(true);
    });

    it('returns false for future dates', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(isPast(futureDate)).toBe(false);
    });
  });
});
