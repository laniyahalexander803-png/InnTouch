function calculateNights(checkin, checkout) {
    const startDate = new Date(checkin);
    const endDate = new Date(checkout);

    const difference = endDate - startDate;
    const nights = difference / (1000 * 60 * 60 * 24);

    if (!Number.isInteger(nights) || nights <= 0) {
        return 0;
    }

    return nights;
}

function calculateTotalCost(nightlyRate, nights) {
    if (!Number.isFinite(nightlyRate) || nightlyRate <= 0 ||
        !Number.isInteger(nights) || nights <= 0) {
        return 0;
    }

    return nightlyRate * nights;
}

if (typeof module !== 'undefined') {
    module.exports = {
        calculateNights,
        calculateTotalCost
    };
}
