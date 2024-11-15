<script lang="ts" setup>
import type {HTMLAttributes} from "vue";
import {useFormField} from "./useFormField";
import {Merge} from "../utils.ts";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
    <p
        :id="formDescriptionId"
        :class="Merge('text-sm text-muted-foreground', props.class)"
    >
        <slot />
    </p>
</template>