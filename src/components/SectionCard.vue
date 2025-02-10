<template>
  <RoundedCard class="rounded-md shadow border border-gray-800 bg-white">
    <h3 v-if="$slots.header" class="p-4 text-xl font-medium border-b border-gray-200">
      <slot name="header"></slot>
    </h3>
    <div v-if="$slots.default" class="p-4 border-b border-gray-200">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" :class="{ 'p-4 ': true, 'border-b border-gray-200': $slots.footer }">
      <slot name="footer"></slot>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from './RoundedCard.vue';
</script>
