<template>
  <div class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList />
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <BookingsList />
  </div>
</template>

<script setup>
import EventList from './components/Events/EventList.vue';
import BookingsList from './components/bookings/BookingsList.vue';
</script>
