<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <caption :class="Merge('mt-4 text-sm text-muted-foreground', props.class)">
        <slot />
    </caption>
</template>