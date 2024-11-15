<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {SelectLabel, type SelectLabelProps} from "radix-vue";
import {Merge} from "../utils.ts";

const props = defineProps<SelectLabelProps & { class?: HTMLAttributes["class"] }>()
</script>

<template>
  <SelectLabel :class="Merge('px-2 py-1.5 text-sm font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
