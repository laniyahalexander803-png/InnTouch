import { describe, it, expect, beforeEach } from 'vitest';
import SearchStorage from '../searchStorage.js';

describe('SearchStorage', () => {

    let storage;
    let searchStorage;

    beforeEach(() => {
        storage = {
            data: {},

            setItem(key, value) {
                this.data[key] = value;
            },

            getItem(key) {
                return this.data[key] ?? null;
            }
        };

        searchStorage = new SearchStorage(storage);
    });

    it('saves and retrieves search information', () => {
        const searchData = {
            checkin: '2026-11-27',
            checkout: '2026-11-30',
            guests: '2'
        };

        searchStorage.saveSearch(searchData);

        expect(searchStorage.loadSearch()).toEqual(searchData);
    });

    it('returns null when no saved search exists', () => {
        expect(searchStorage.loadSearch()).toBeNull();
    });

    it('updates previously saved search information', () => {
        searchStorage.saveSearch({
            guests: '2'
        });

        searchStorage.saveSearch({
            guests: '4'
        });

        expect(searchStorage.loadSearch().guests).toBe('4');
    });

});
