import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const STORAGE_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(STORAGE_DIR, 'bookings.json');

interface StoredBooking {
  sessionId: string;
  bookingData: any;
  createdAt: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export async function storeBookingData(sessionId: string, bookingData: any): Promise<void> {
  try {
    // Ensure data directory exists
    if (!existsSync(STORAGE_DIR)) {
      await mkdir(STORAGE_DIR, { recursive: true });
    }

    let bookings: StoredBooking[] = [];

    // Read existing bookings
    if (existsSync(BOOKINGS_FILE)) {
      const data = await readFile(BOOKINGS_FILE, 'utf-8');
      bookings = JSON.parse(data);
    }

    // Add new booking
    const newBooking: StoredBooking = {
      sessionId,
      bookingData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    bookings.push(newBooking);

    // Write back to file
    await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
  } catch (error) {
    console.error('Error storing booking data:', error);
    throw error;
  }
}

export async function getBookingData(sessionId: string): Promise<any | null> {
  try {
    if (!existsSync(BOOKINGS_FILE)) {
      return null;
    }

    const data = await readFile(BOOKINGS_FILE, 'utf-8');
    const bookings: StoredBooking[] = JSON.parse(data);

    const booking = bookings.find(b => b.sessionId === sessionId);
    return booking ? booking.bookingData : null;
  } catch (error) {
    console.error('Error retrieving booking data:', error);
    return null;
  }
}

export async function updateBookingStatus(sessionId: string, status: 'completed' | 'cancelled'): Promise<void> {
  try {
    if (!existsSync(BOOKINGS_FILE)) {
      return;
    }

    const data = await readFile(BOOKINGS_FILE, 'utf-8');
    const bookings: StoredBooking[] = JSON.parse(data);

    const bookingIndex = bookings.findIndex(b => b.sessionId === sessionId);
    if (bookingIndex !== -1) {
      bookings[bookingIndex].status = status;
      await writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
    }
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw error;
  }
}