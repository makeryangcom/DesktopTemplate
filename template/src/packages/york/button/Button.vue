<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { type ButtonVariants, buttonVariants } from ".";
import { Merge } from "../utils.ts";

interface Props extends PrimitiveProps {
    variant?: ButtonVariants["variant"]
    size?: ButtonVariants["size"]
    class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
    as: "button",
})
</script>

<template>
    <Primitive :as="as" :as-child="asChild" :class="Merge(buttonVariants({ variant, size }), props.class)">
        <slot />
    </Primitive>
</template>