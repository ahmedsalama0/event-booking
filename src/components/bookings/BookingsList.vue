<template>
  <template v-if="error">
    <ErrorCard :fetch="fetchBookings">
      Could not load bookings at the moment. Please try again.</ErrorCard
    >
  </template>
  <template v-else>
    <template v-if="isLoading">
      <LoadingBookingCard />
    </template>
    <template v-else>
      <template v-if="bookings.length">
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :booking="booking"
          @cancelled="cancelBooking(booking.id)"
        />
      </template>
      <template v-else>
        <p>No Bookings Yet!</p>
      </template>
    </template>
  </template>
</template>

<script setup>
import { onMounted } from 'vue';
import useBookings from '@/composables/useBookings';
import BookingItem from './BookingItem.vue';
import ErrorCard from '../layout/ErrorCard.vue';
import LoadingBookingCard from '../layout/LoadingBookingCard.vue';

const { isLoading, error, bookings, fetchBookings, cancelBooking } = useBookings();

onMounted(() => fetchBookings());
</script>
