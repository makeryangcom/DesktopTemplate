<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="Merge('ml-auto text-xs tracking-widest opacity-60', props.class)">
    <slot />
  </span>
</template>