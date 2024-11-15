<script setup lang="ts">
import {type HTMLAttributes, computed} from "vue";
import {SelectGroup, type SelectGroupProps} from "radix-vue";
import {Merge} from "../utils.ts";

const props = defineProps<SelectGroupProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectGroup :class="Merge('p-1 w-full', props.class)" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
