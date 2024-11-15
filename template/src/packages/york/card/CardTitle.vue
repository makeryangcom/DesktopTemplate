<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      Merge('font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot />
  </h3>
</template>
