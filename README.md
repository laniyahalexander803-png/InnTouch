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