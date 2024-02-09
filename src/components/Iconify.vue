<template>
  <Icon :icon="icon" :width="width" :height="width" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: 20,
  },
});
</script>
