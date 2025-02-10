# **Event Booking App (Vue 3)**

## **Overview**

This is an Event Booking application built with Vue 3. It allows users to book events, manage their bookings, and provides real-time feedback with an optimized user experience.

## **Features**

- ✅ **Load Events & Bookings**: Fetch events and bookings from the server.
- ✅ **Book an Event**: Users can book an event (via an HTTP request).
- ✅ **Optimistic UI**: Feedback appears instantly to the user.
- ✅ **Loading Indicators**: Prevents layout shifts with placeholder skeletons.
- ✅ **Validation & Error Handling**:
  - Users cannot book the same event twice.
  - Users cannot cancel a booking before the server confirms it.
  - HTTP request validation and error handling.
- ✅ **Delete a Booking**: Users can remove bookings (via a DELETE request).
- ✅ **Component Reusability**: Uses Vue composables to manage reusable stateful logic.

## **Tech Stack**

- **Frontend:** Vue 3, HTML, CSS, JavaScript
- **Styling:** Tailwind CSS
- **API:** Mock API Server or Real API (Configurable)
- **Data Fetching:** Fetch API or Axios

## **Usage**

- **Browse Events**: View all available events.
- **Book an Event**: Click the booking button and get instant feedback.
- **Manage Bookings**: Create, cancel bookings.
