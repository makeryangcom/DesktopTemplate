<script setup lang="ts">
import {type HTMLAttributes, computed} from "vue";
import {PaginationNext, type PaginationNextProps} from "radix-vue";
import {ChevronRightIcon} from "@radix-icons/vue";
import {Button} from "../button";
import {Merge} from "../utils.ts";

const props = withDefaults(defineProps<PaginationNextProps & { class?: HTMLAttributes['class'] }>(), {
    asChild: true,
})

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <PaginationNext v-bind="delegatedProps">
        <Button :class="Merge('w-9 h-9 p-0', props.class)" variant="outline">
            <slot>
                <ChevronRightIcon class="w-3 h-3" />
            </slot>
        </Button>
    </PaginationNext>
</template>