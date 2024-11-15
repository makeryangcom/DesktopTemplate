<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {Primitive, type PrimitiveProps} from "radix-vue";
import {OctagonAlert} from "lucide-vue-next";
import {Merge} from "../utils.ts";

interface Props extends PrimitiveProps {
    class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
    as: "div",
})
</script>

<template>
    <Primitive :as="as" :as-child="asChild" class="w-full flex flex-col gap-1 text-center text-red-700 text-xs" :class="props.class">
        <div class="w-4 h-4 mx-auto text-center leading-4">
            <OctagonAlert class="w-4 h-4" :class="props.class" />
        </div>
        <slot />
    </Primitive>
</template>
