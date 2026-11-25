import { describe, it, expect } from 'vitest';
import createBooking from '../bookingService.js';

describe('Booking Service', () => {

    const room = {
        name: 'Deluxe Ocean View',
        price: 150,
        maxGuests: 2
    };

    const searchData = {
        checkin: '2026-11-27',
        checkout: '2026-11-30',
        guests: '2'
    };

    it('creates a successful booking', () => {
        const booking = createBooking(room, searchData, 3, 450);

        expect(booking.status).toBe('Confirmed');
        expect(booking.room).toBe('Deluxe Ocean View');
        expect(booking.totalCost).toBe(450);
        expect(booking.nights).toBe(3);
        expect(booking.checkin).toBe(searchData.checkin);
        expect(booking.checkout).toBe(searchData.checkout);
        expect(booking.guests).toBe(searchData.guests);
    });

    it('generates a reservation ID', () => {
        const booking = createBooking(room, searchData, 3, 450);

        expect(booking.reservationId).toMatch(/^INN-/);
    });

    it('generates different reservation IDs', () => {
        const first = createBooking(room, searchData, 3, 450);
        const second = createBooking(room, searchData, 3, 450);

        expect(first.reservationId).not.toBe(second.reservationId);
    });

    it('rejects booking without a selected room', () => {
        expect(createBooking(null, searchData, 3, 450)).toBeNull();
    });

    it('rejects missing search information', () => {
        expect(createBooking(room, null, 3, 450)).toBeNull();
    });

    it('rejects zero-night bookings', () => {
        expect(createBooking(room, searchData, 0, 450)).toBeNull();
    });

    it('rejects invalid reservation costs', () => {
        expect(createBooking(room, searchData, 3, -450)).toBeNull();
    });

});
