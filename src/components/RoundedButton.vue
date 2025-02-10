<template>
  <button
    :class="['text-sm font-medium rounded-full px-3 py-1', variants[variant] ?? variants.default]"
  >
    <slot>Click Here</slot>
  </button>
</template>

<script setup>
const variants = {
  default: 'border border-gray-200 hover:bg-gray-100',
  danger: 'text-red-900 bg-red-200 enabled:hover:bg-red-100',
};
defineProps({
  variant: {
    type: String,
    default: 'default',
  },
});
</script>
