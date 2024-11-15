<template>
    <div class="w-full h-[64px] fixed left-0 right-0 top-[calc(50%-32px)] text-center space-y-2 space-x-2">
        <div class="w-full">Hello Vue3 + TypeScript + Vite + Pinia Frontend Template</div>
        <Button size="default" variant="outline" @click="props.data.base.store.count++">
            <span>Click {{props.data.base.store.count}}</span>
        </Button>
        <Button size="default" variant="outline" @click="props.data.base.$reset">
            <span>Reset</span>
        </Button>
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick} from "vue";
import {Button} from "../packages/york";

const props: any = defineProps<{
    data: any
}>();

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {
        console.log("[view:index]", props.data);
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style scoped>

</style>
