<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div class="relative w-full overflow-auto">
        <table :class="Merge('w-full caption-bottom text-sm', props.class)">
            <slot />
        </table>
    </div>
</template>