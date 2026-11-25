function validateSearch(searchData) {
    const checkin = new Date(searchData.checkin);
    const checkout = new Date(searchData.checkout);
    const guests = Number(searchData.guests);

    if (isNaN(checkin.getTime()) || isNaN(checkout.getTime())) {
        return 'Error: Please enter valid dates.';
    }

    if (checkout <= checkin) {
        return 'Error: Check-out date must be after check-in date.';
    }

    if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
        return 'Error: Please enter between 1 and 10 guests.';
    }

    return null;
}

function saveValidSearch(searchData, searchStorage) {
    const error = validateSearch(searchData);

    if (!error) {
        searchStorage.saveSearch(searchData);
    }

    return error;
}

if (typeof module !== 'undefined') {
    module.exports = validateSearch;
    module.exports.saveValidSearch = saveValidSearch;
}
