class SearchStorage {
    constructor(storage) {
        this.storage = storage;
        this.key = 'hotelSearch';
    }

    saveSearch(searchData) {
        this.storage.setItem(
            this.key,
            JSON.stringify(searchData)
        );
    }

    loadSearch() {
        const savedSearch = this.storage.getItem(this.key);

        return savedSearch ? JSON.parse(savedSearch) : null;
    }
}
