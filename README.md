# InnTouch - Hotel Reservation Web Application

## Project Description
InnTouch is a web application designed to allow users to search for available hotel rooms based on stay dates and number of guests.

## Author
* **Name:** Laniyah Alexander

## Technologies Used
* HTML5
* JavaScript (ES6)
* CSS3

## Prerequisites
* Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

## Installation & Running Instructions
1. Clone the repository to your local machine:
   `git clone https://github.com/laniyahalexander803-png/InnTouch.git`
2. Navigate to the project directory:
   `cd InnTouch`
3. Open `index.html` in your web browser or run:
   `explorer.exe index.html` (on Windows Git Bash)

## Trying Sprint 1 Functionality
1. Open `index.html` in your browser.
2. Select a valid Check-in Date and Check-out Date (Check-out must be after Check-in).
3. Set the number of guests and click **Search Availability**.
4. Observe the displayed available rooms.
5. Try selecting a Check-out date earlier than Check-in to observe input validation.

## Known Limitations
* Sprint 1 uses mock in-memory room data (no external database persistence).
## Sprint 2 - Saved Search Information

* Users can save their check-in date, check-out date, and guest count.
* Previously saved search information is restored after refreshing the page.
* Invalid search information is rejected and does not overwrite saved information.

## Automated Testing

### Prerequisites
* Node.js and npm
* Vitest (installed through npm)

### Running Tests
1. Open a terminal in the InnTouch project folder.
2. Run `npm ci` to install dependencies.
3. Run `npm test` to execute the automated tests.
4. On Windows PowerShell, use `npm.cmd ci` and `npm.cmd test` if npm scripts are blocked.

### SOLID Principles Applied
* Single Responsibility Principle: Search validation and storage are separated into dedicated files.
* Dependency Inversion Principle: SearchStorage receives its storage dependency, allowing fake storage to be used during automated testing.

### Additional Known Limitations
* Saved searches are stored locally in the user's browser and are not shared across devices.
## Sprint 2 - Room Selection and Reservation Summary

* Users can select a room from the available search results.
* The reservation summary displays the selected room, dates,
  guest count, number of nights, nightly rate, and total cost.
* The total cost is automatically calculated based on the
  nightly rate and number of nights.
* Performing a new search clears the previous reservation summary.

### Additional Automated Tests

* Verify the correct number of nights.
* Verify the correct total reservation cost.
* Reject invalid reservation dates.
* Reject invalid room prices and reservation durations.
## Sprint 2 - Booking Confirmation

* Users can confirm their selected hotel room.
* A unique reservation ID is generated for each booking.
* The booking confirmation displays the room, dates,
  guest count, total cost, and reservation status.
* The confirmation button is disabled after a successful
  booking to prevent accidental duplicate confirmation
  of the current selection.

### Booking Service Tests

* Verify successful booking creation.
* Verify reservation ID generation.
* Verify different bookings receive different IDs.
* Reject bookings without a selected room.
* Reject bookings with missing search information.
* Reject invalid reservation durations and costs.

### Known Limitations

* Reservations are simulated and are not connected to
  a real hotel booking system.
* Completed reservations are not permanently saved.
* Users cannot currently modify or cancel reservations.
* Guest contact information and payment processing
  are not implemented.

## Future Development - Sprint 3

* Save completed reservations.
* Add guest contact information.
* Allow users to view their reservations.
* Allow users to modify or cancel reservations.