<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="Merge('flex flex-col gap-y-1.5 p-6', props.class)">
    <slot />
  </div>
</template>
