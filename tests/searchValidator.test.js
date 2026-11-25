import { describe, it, expect } from 'vitest';
import validateSearch from '../searchValidator.js';

describe('Search Validation', () => {

    it('accepts valid search information', () => {
        expect(validateSearch({
            checkin: '2026-11-27',
            checkout: '2026-11-30',
            guests: '2'
        })).toBeNull();
    });

    it('rejects checkout before checkin', () => {
        expect(validateSearch({
            checkin: '2026-11-30',
            checkout: '2026-11-27',
            guests: '2'
        })).not.toBeNull();
    });

    it('rejects matching checkin and checkout dates', () => {
        expect(validateSearch({
            checkin: '2026-11-27',
            checkout: '2026-11-27',
            guests: '2'
        })).not.toBeNull();
    });

    it('rejects missing dates', () => {
        expect(validateSearch({
            checkin: '',
            checkout: '',
            guests: '2'
        })).not.toBeNull();
    });

    it('rejects zero guests', () => {
        expect(validateSearch({
            checkin: '2026-11-27',
            checkout: '2026-11-30',
            guests: '0'
        })).not.toBeNull();
    });

    it('rejects more than 10 guests', () => {
        expect(validateSearch({
            checkin: '2026-11-27',
            checkout: '2026-11-30',
            guests: '11'
        })).not.toBeNull();
    });

});