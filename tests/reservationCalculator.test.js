import { describe, it, expect } from 'vitest';
import calculator from '../reservationCalculator.js';

const { calculateNights, calculateTotalCost } = calculator;

describe('Reservation Calculator', () => {

    it('calculates the correct number of nights', () => {
        expect(calculateNights(
            '2026-11-27', '2026-11-30'
        )).toBe(3);
    });

    it('calculates a one-night stay', () => {
        expect(calculateNights(
            '2026-11-27', '2026-11-28'
        )).toBe(1);
    });

    it('rejects checkout before checkin', () => {
        expect(calculateNights(
            '2026-11-30', '2026-11-27'
        )).toBe(0);
    });

    it('rejects matching checkin and checkout dates', () => {
        expect(calculateNights(
            '2026-11-27', '2026-11-27'
        )).toBe(0);
    });

    it('rejects invalid dates', () => {
        expect(calculateNights('', '')).toBe(0);
    });

    it('calculates the correct total cost', () => {
        expect(calculateTotalCost(150, 3)).toBe(450);
    });

    it('calculates the Executive Suite total', () => {
        expect(calculateTotalCost(250, 3)).toBe(750);
    });

    it('rejects negative room prices', () => {
        expect(calculateTotalCost(-150, 3)).toBe(0);
    });

    it('rejects zero-night reservations', () => {
        expect(calculateTotalCost(150, 0)).toBe(0);
    });

});