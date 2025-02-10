import { ref } from 'vue';

const isLoading = ref(false);
const error = ref(null);
const bookings = ref([]);

function findBookingIndex(id) {
  return bookings.value.findIndex((el) => el.id === id);
}

async function fetchBookings() {
  try {
    isLoading.value = true;
    error.value = null;
    const response = await fetch('http://localhost:3001/bookings');
    const data = await response.json();
    bookings.value = data;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}

async function addBooking(event) {
  // check for event duplication for the same user
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You are already registered for this event.');
    return;
  }

  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending',
  };

  bookings.value.push(newBooking); // Optimistic UI

  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newBooking, status: 'confirmed' }),
    });

    if (response.ok) {
      const index = findBookingIndex(newBooking.id);
      bookings.value[index] = await response.json();
    } else {
      throw new Error('Failed to confirm booking');
    }
  } catch (err) {
    console.error('Failed to register for event: ', err);
    bookings.value = bookings.value.filter((el) => el.id !== newBooking.id);
  }
}

async function cancelBooking(bookingId) {
  const index = findBookingIndex(bookingId);
  const originalBooking = bookings.value[index];
  bookings.value.splice(index, 1);

  try {
    const response = await fetch(`http://localhost:3001/bookings/${bookingId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Booking could not be cancelled.');
    }
  } catch (err) {
    console.error('Failed to delete the resource.', err);
    bookings.value.splice(index, 0, originalBooking);
  }
}

export default function useBookings() {
  return { isLoading, error, bookings, fetchBookings, addBooking, cancelBooking };
}
