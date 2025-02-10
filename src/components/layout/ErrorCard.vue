<template>
  <div class="w-auto h-22 text-center py-2 rounded-md bg-white border border-gray-900">
    <div class="mb-2 text-red-500">
      <slot>An Error Occurred!</slot>
    </div>
    <div class="mb-2">
      <RoundedButton v-if="fetch" @click="fetch" variant="default">Retry Now</RoundedButton>
    </div>
  </div>
</template>

<script setup>
import RoundedButton from '../RoundedButton.vue';

defineProps({
  fetch: {
    type: Function,
    required: false,
  },
});
</script>
