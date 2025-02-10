<template>
  <SectionCard>
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div class="text-lg">{{ booking.eventTitle }}</div>
        <component :is="statusIcon" :class="{ 'animate-spin': isPending }" />
      </div>
      <RoundedButton variant="danger" @click="$emit('cancelled')">Cancel</RoundedButton>
    </div>
  </SectionCard>
</template>

<script setup>
import { computed } from 'vue';
import RoundedButton from '../RoundedButton.vue';
import SectionCard from '../SectionCard.vue';

import { LoaderCircle, Check } from 'lucide-vue-next';

const isPending = computed(() => props.booking.status === 'pending');
const statusIcon = computed(() => (isPending.value ? LoaderCircle : Check));

const props = defineProps({
  booking: {
    type: Object,
  },
});

defineEmits(['cancelled']);
</script>
