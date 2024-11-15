<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <thead :class="Merge('[&_tr]:border-b', props.class)">
    <slot />
    </thead>
</template>