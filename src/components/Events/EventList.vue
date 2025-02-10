<template>
  <template v-if="error">
    <ErrorCard :fetch="fetchEvents"
      >Could not load events at the moment. Please try again.</ErrorCard
    >
  </template>
  <template v-else>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <template v-if="isLoading">
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
      <template v-else>
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :event="event"
            @register="addBooking(event)"
          />
        </template>
        <template v-else>
          <div>No Events yet.</div>
        </template>
      </template>
    </section>
  </template>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EventCard from './EventCard.vue';
import useBookings from '@/composables/useBookings';
import ErrorCard from '../layout/ErrorCard.vue';
import LoadingEventCard from '../layout/LoadingEventCard.vue';

const { addBooking } = useBookings();

const events = ref([]);
const error = ref(null);
const isLoading = ref(false);

async function fetchEvents() {
  isLoading.value = true;
  try {
    error.value = false;
    const response = await fetch('http://localhost:3001/events');
    const data = await response.json();
    events.value = data;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => fetchEvents());
</script>
