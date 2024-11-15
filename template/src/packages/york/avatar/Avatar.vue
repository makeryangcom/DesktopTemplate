<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {AvatarRoot} from "radix-vue";
import {type AvatarVariants, avatarVariant} from ".";
import {Merge} from "../utils.ts";

const props = withDefaults(defineProps<{
    class?: HTMLAttributes['class']
    size?: AvatarVariants['size']
    shape?: AvatarVariants['shape']
}>(), {
    size: 'sm',
    shape: 'circle',
})
</script>

<template>
    <AvatarRoot :class="Merge(avatarVariant({ size, shape }), props.class)">
        <slot />
    </AvatarRoot>
</template>