<template>
    <router-view ref="routerView" v-slot="{Component}">
        <component :is="Component" :data="data" :base="base"/>
    </router-view>
    <Toaster ref="toaster" />
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useDark} from "@vueuse/core";
import {useStore} from "./packages/store";
import {ThemeColors} from "./packages/config";
import {Toaster, useToast} from "@/lib/toast";

const $route = useRoute();
const $router = useRouter();
const $store = useStore();
const {toast} = useToast();

const base: any = (window as any).base;
const data: any = ref({
    route: $route,
    router: $router,
    store: $store,
    theme: {
        colors: ThemeColors,
        dark: useDark()
    },
    header: {
        search: {
            status: false
        }
    },
    browser: {
        toast: toast
    }
});

onBeforeMount(() => {});

onMounted(() => {
    document.documentElement.style.setProperty("--radius", `${$store.radius.value}rem`);
    document.documentElement.classList.add(`theme-${$store.theme.value}`);
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style>
@import url("./assets/css/shiki.css");
@import url("./assets/css/tailwind.css");
@import url("./assets/css/themes.css");
@import url("./assets/css/markdown.css");
</style>
