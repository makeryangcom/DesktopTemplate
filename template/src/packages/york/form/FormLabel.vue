<script lang="ts" setup>
import type {HTMLAttributes} from "vue";
import type {LabelProps} from "radix-vue";
import {useFormField} from "./useFormField";
import {Merge} from "../utils.ts";
import {Label} from "../label";

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()
</script>

<template>
    <Label
        :class="Merge(
      error && 'text-destructive',
      props.class,
    )"
        :for="formItemId"
    >
        <slot />
    </Label>
</template>