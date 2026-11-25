function createBooking(room, searchData, nights, totalCost) {
    if (!room || !searchData) {
        return null;
    }

    if (!Number.isInteger(nights) || nights <= 0 ||
        !Number.isFinite(totalCost) || totalCost <= 0) {
        return null;
    }

    const reservationId = 'INN-' + crypto.randomUUID();

    return {
        reservationId: reservationId,
        room: room.name,
        checkin: searchData.checkin,
        checkout: searchData.checkout,
        guests: searchData.guests,
        nights: nights,
        totalCost: totalCost,
        status: 'Confirmed'
    };
}

if (typeof module !== 'undefined') {
    module.exports = createBooking;
}