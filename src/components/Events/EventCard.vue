<template>
  <SectionCard>
    <template #header>
      {{ event.title }}
    </template>
    <template #default>
      {{ event.date }}
    </template>
    <template #footer>
      <div class="space-y-4">
        <p>
          {{ event.description }}
        </p>
        <div class="flex justify-end">
          <RoundedButton @click="$emit('register')">Register</RoundedButton>
        </div>
      </div>
    </template>
  </SectionCard>
</template>

<script setup>
import RoundedButton from '../RoundedButton.vue';
import SectionCard from '../SectionCard.vue';
defineProps({
  event: {
    type: Object,
  },
});
defineEmits(['register']);
</script>
