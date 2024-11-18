<template>
    <CommonHeader ref="commonHeader" :data="props.data" />
    <div class="w-full h-[64px] fixed left-0 right-0 top-[calc(50%-32px)] text-center space-y-2 space-x-2">
        <div class="w-full">Hello Vue3 + TypeScript + Vite + Pinia Frontend Template</div>
        <Button size="default" variant="outline" @click="props.data.base.api.$Store.count++">
            <span>{{props.data.tools.language.t("base.click")}} {{props.data.base.api.$Store.count}}</span>
        </Button>
        <Button size="default" @click="props.data.base.api.$Reset()">
            <span>{{props.data.tools.language.t("base.reset")}}</span>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from "vue";
import { Button } from "../packages/york";
import CommonHeader from "./common/header.vue";

const props: any = defineProps<{
    data: any
}>();

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {
        console.log("[template:view:index]", props.data);
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style scoped>

</style>
