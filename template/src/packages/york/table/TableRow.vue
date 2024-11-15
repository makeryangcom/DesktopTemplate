<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <tr :class="Merge('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', props.class)">
        <slot />
    </tr>
</template>