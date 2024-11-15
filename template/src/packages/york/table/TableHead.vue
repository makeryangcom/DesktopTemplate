<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <th :class="Merge('h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5', props.class)">
        <slot />
    </th>
</template>