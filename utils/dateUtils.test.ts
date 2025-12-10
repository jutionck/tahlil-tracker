import { describe, it, expect } from 'vitest';
import { calculateMilestones, getJavanesePasaran, formatDateIndonesian } from './dateUtils';
import { CalculationMethod } from '../types';

describe('dateUtils', () => {
  describe('getJavanesePasaran', () => {
    it('should correctly calculate known Pasaran dates', () => {
      // Reference: Jan 1, 2024 was Monday Pahing
      const jan1_2024 = new Date(2024, 0, 1);
      expect(getJavanesePasaran(jan1_2024)).toBe('Pahing');

      // Jan 2, 2024 = Pon
      const jan2_2024 = new Date(2024, 0, 2);
      expect(getJavanesePasaran(jan2_2024)).toBe('Pon');

      // Jan 5, 2024 = Legi
      const jan5_2024 = new Date(2024, 0, 5);
      expect(getJavanesePasaran(jan5_2024)).toBe('Legi');
    });

    it('should handle dates before reference date', () => {
      // Dec 31, 2023 = Legi
      const dec31_2023 = new Date(2023, 11, 31);
      expect(getJavanesePasaran(dec31_2023)).toBe('Legi');
    });
  });

  describe('calculateMilestones', () => {
    it('should return empty array for empty date', () => {
      const milestones = calculateMilestones('');
      expect(milestones).toHaveLength(0);
    });

    it('should calculate Traditional (Geblag=Day 1) correctly', () => {
      // Death: Jan 1. 
      // 3rd day = Jan 3 (Jan 1, 2, 3) -> +2 offset from death date?
      // Let's check logic:
      // createMilestone(3) -> date + 3 - 1 = date + 2.
      // Jan 1 + 2 days = Jan 3. Correct.

      const deathDate = '2024-01-01';
      const milestones = calculateMilestones(deathDate, CalculationMethod.TRADITIONAL);

      const day3 = milestones.find(m => m.daysFromDeath === 3);
      expect(day3?.date.getDate()).toBe(3);

      const day7 = milestones.find(m => m.daysFromDeath === 7);
      // 7th day: Jan 1 + 6 = Jan 7.
      expect(day7?.date.getDate()).toBe(7);
    });

    it('should calculate Modern (Besok=Day 1) correctly', () => {
      const deathDate = '2024-01-01';
      const milestones = calculateMilestones(deathDate, CalculationMethod.MODERN);

      const day3 = milestones.find(m => m.daysFromDeath === 3);
      // Jan 1 + 3 = Jan 4.
      expect(day3?.date.getDate()).toBe(4);
    });
  });

  describe('formatDateIndonesian', () => {
    it('should format date correctly', () => {
      const date = new Date(2024, 0, 1); // Monday Jan 1 2024
      expect(formatDateIndonesian(date)).toBe('Senin, 1 Januari 2024');
    });
  });
});
