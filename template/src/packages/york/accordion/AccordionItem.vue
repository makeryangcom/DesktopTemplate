<script setup lang="ts">
import {type HTMLAttributes, computed} from "vue";
import {AccordionItem, type AccordionItemProps, useForwardProps} from "radix-vue";
import {Merge} from "../utils.ts";

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    :class="Merge('border-b border-input', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
