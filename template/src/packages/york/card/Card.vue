<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      Merge(
        'rounded-xl border bg-card text-card-foreground shadow',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
