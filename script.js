
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

    if (checkout <= checkin) {
        errorDiv.textContent = 'Error: Check-out date must be after check-in date.';
        return;
    }
searchStorage.saveSearch({
    checkin: document.getElementById('checkin').value,
    checkout: document.getElementById('checkout').value,
    guests: guests
});
    const rooms = [
        { name: 'Deluxe Ocean View', price: '$150/night', maxGuests: 2 },
        { name: 'Executive Suite', price: '$250/night', maxGuests: 4 },
        { name: 'Standard King Room', price: '$110/night', maxGuests: 2 }
    ];

    const availableRooms = rooms.filter(room => room.maxGuests >= guests);

    let html = '<h3>Available Rooms</h3><ul>';
    availableRooms.forEach(room => {
        html += `<li><strong>${room.name}</strong> - ${room.price} (Max Guests: ${room.maxGuests})</li>`;
    });
    html += '</ul>';

    resultsDiv.innerHTML = html;
});
// Restore saved search information
const savedSearch = searchStorage.loadSearch();

if (savedSearch) {
    document.getElementById('checkin').value = savedSearch.checkin;
    document.getElementById('checkout').value = savedSearch.checkout;
    document.getElementById('guests').value = savedSearch.guests;
}