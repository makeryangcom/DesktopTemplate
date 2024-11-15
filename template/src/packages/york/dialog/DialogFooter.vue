<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    :class="
      Merge(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
