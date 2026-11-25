
const searchStorage = new SearchStorage(localStorage);

document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const guests = document.getElementById('guests').value;
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error-message');

    resultsDiv.innerHTML = '';
    errorDiv.innerHTML = '';
    document.getElementById('reservation-summary').innerHTML = '';

    const searchData = {
    checkin: document.getElementById('checkin').value,
    checkout: document.getElementById('checkout').value,
    guests: guests
};

const validationError = saveValidSearch(searchData, searchStorage);

if (validationError) {
    errorDiv.textContent = validationError;
    return;
}
    const rooms = [
    { name: 'Deluxe Ocean View', price: 150, maxGuests: 2 },
    { name: 'Executive Suite', price: 250, maxGuests: 4 },
    { name: 'Standard King Room', price: 110, maxGuests: 2 }
];

    const availableRooms = rooms.filter(room => room.maxGuests >= guests);

    let html = '<h3>Available Rooms</h3><ul>';

availableRooms.forEach((room, index) => {
    html += `
        <li>
            <strong>${room.name}</strong>
            - $${room.price}/night
            (Max Guests: ${room.maxGuests})
            <button type="button" class="select-room"
                data-index="${index}">
                Select Room
            </button>
        </li>
    `;
});

html += '</ul>';

resultsDiv.innerHTML = html;
document.querySelectorAll('.select-room').forEach(button => {
    button.addEventListener('click', function() {
        const roomIndex = Number(this.dataset.index);
        const selectedRoom = availableRooms[roomIndex];

        displayReservationSummary(selectedRoom, searchData);
    });
});
});
// Restore saved search information
const savedSearch = searchStorage.loadSearch();

if (savedSearch) {
    document.getElementById('checkin').value = savedSearch.checkin;
    document.getElementById('checkout').value = savedSearch.checkout;
    document.getElementById('guests').value = savedSearch.guests;
}
function displayReservationSummary(room, searchData) {
    const nights = calculateNights(
        searchData.checkin,
        searchData.checkout
    );

    const totalCost = calculateTotalCost(room.price, nights);

    const summaryDiv = document.getElementById('reservation-summary');

    summaryDiv.innerHTML = `
        <h3>Reservation Summary</h3>
        <p><strong>Room:</strong> ${room.name}</p>
        <p><strong>Check-in:</strong> ${searchData.checkin}</p>
        <p><strong>Check-out:</strong> ${searchData.checkout}</p>
        <p><strong>Guests:</strong> ${searchData.guests}</p>
        <p><strong>Number of Nights:</strong> ${nights}</p>
        <p><strong>Nightly Rate:</strong> $${room.price}</p>
        <p><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</p>
    `;
}