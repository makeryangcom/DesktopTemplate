<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Primitive, type PrimitiveProps} from "radix-vue";
import {Loader2} from "lucide-vue-next";

interface Props extends PrimitiveProps {
    class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
    as: "div",
})
</script>

<template>
    <Primitive :as="as" :as-child="asChild" class="w-full text-center text-zinc-700 text-xs">
        <div class="w-4 h-4 mx-auto text-center leading-4">
            <Loader2 class="animate-spin w-4 h-4" :class="props.class" />
        </div>
        <div class="mt-1">
            <slot />
        </div>
    </Primitive>
</template>
