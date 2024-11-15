<script setup lang="ts">
import {type HTMLAttributes, computed} from "vue";
import {PaginationFirst, type PaginationFirstProps} from "radix-vue";
import {DoubleArrowLeftIcon } from "@radix-icons/vue";
import {Button} from "../button";
import {Merge} from "../utils.ts";

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(), {
    asChild: true,
})

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <PaginationFirst v-bind="delegatedProps">
        <Button :class="Merge('w-9 h-9 p-0', props.class)" variant="outline">
            <slot>
                <DoubleArrowLeftIcon class="w-3 h-3"/>
            </slot>
        </Button>
    </PaginationFirst>
</template>