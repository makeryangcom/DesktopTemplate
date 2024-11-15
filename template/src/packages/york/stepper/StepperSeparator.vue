<script lang="ts" setup>
import {type HTMLAttributes, computed} from "vue";
import type {StepperSeparatorProps} from "radix-vue";
import {StepperSeparator, useForwardProps} from "radix-vue";
import {Merge} from "../utils.ts";

const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
    <StepperSeparator
        v-bind="forwarded"
        :class="Merge(
      'bg-muted',
      // Disabled
      'group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50',
      // Completed
      'group-data-[state=completed]:bg-accent-foreground',
      props.class,
    )"
    />
</template>