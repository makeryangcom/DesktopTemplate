<script setup lang="ts">
import {type HTMLAttributes, computed} from "vue";
import type {ComboboxSeparatorProps} from "radix-vue";
import {ComboboxSeparator} from "radix-vue";
import {Merge} from "../utils.ts";

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <ComboboxSeparator
        v-bind="delegatedProps"
        :class="Merge('-mx-1 h-px bg-border', props.class)"
    >
        <slot />
    </ComboboxSeparator>
</template>