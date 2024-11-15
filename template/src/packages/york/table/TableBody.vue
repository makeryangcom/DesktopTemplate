<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <tbody :class="Merge('[&_tr:last-child]:border-0', props.class)">
    <slot />
    </tbody>
</template>