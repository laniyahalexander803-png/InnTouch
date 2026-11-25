import { describe, it, expect, vi } from 'vitest';
import validator from '../searchValidator.js';

const { saveValidSearch } = validator;

describe('Saving Valid Searches', () => {

    it('saves valid search information', () => {
        const storage = {
            saveSearch: vi.fn()
        };

        const searchData = {
            checkin: '2026-11-27',
            checkout: '2026-11-30',
            guests: '2'
        };

        expect(saveValidSearch(searchData, storage)).toBeNull();
        expect(storage.saveSearch).toHaveBeenCalledWith(searchData);
    });

    it('does not save invalid search information', () => {
        const storage = {
            saveSearch: vi.fn()
        };

        const searchData = {
            checkin: '2026-11-30',
            checkout: '2026-11-27',
            guests: '2'
        };

        expect(saveValidSearch(searchData, storage)).not.toBeNull();
        expect(storage.saveSearch).not.toHaveBeenCalled();
    });

});