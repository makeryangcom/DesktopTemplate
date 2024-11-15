<script setup lang="ts">
import {type HTMLAttributes, computed} from "vue";
import {ToastTitle, type ToastTitleProps} from "radix-vue";
import {Merge} from "../utils.ts";

const props = defineProps<ToastTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastTitle v-bind="delegatedProps" :class="Merge('text-sm font-semibold [&+div]:text-xs', props.class)">
    <slot />
  </ToastTitle>
</template>
