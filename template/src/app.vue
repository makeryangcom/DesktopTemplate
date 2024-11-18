<template>
    <router-view ref="routerView" v-slot="{Component}">
        <component :is="Component" :data="data" />
    </router-view>
    <Toaster ref="toaster"></Toaster>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";
import { Toaster, useToast } from "./packages/york";
import { useBaseStore, useLanguageStore, useRequestStore, useThemeStore } from "./stores";

const base = useBaseStore();
const language = useLanguageStore();
const request = useRequestStore();
const theme = useThemeStore();
const {toast} = useToast();

const data: any = ref({
    base: {
        route: base.$useRoute,
        router: base.$useRouter,
        api: base,
    },
    tools: {
        language: {
            current: (navigator as any).language,
            locale: language.$I18n.useI18n().locale,
            t: language.$I18n.useI18n().t,
            f: language.$Format,
            api: language
        },
        request: request.$Request,
        toast: toast
    },
    window: {
        max: false
    },
    theme: {
        api: theme,
    },
    header: {
        search: {
            status: false
        }
    },
});

function onInitAndListenerResize(){
    (window as any).base.ipc.send("message", {type: "template:window:resize", data: "resize"});
    window.addEventListener("resize", function() {
        (window as any).base.ipc.send("message", {type: "template:window:resize", data: "resize"});
    });
}

onBeforeMount(() => {});

onMounted(() => {
    document.documentElement.style.setProperty("--radius", `${data.value.theme.api.radius}rem`);
    document.documentElement.classList.add(`theme-${data.value.theme.api.theme}`);
    nextTick(() => {
        console.log("author:" + (window as any).base.author, "language:" + data.value.tools.language.current);
        console.log((window as any).base.name + ":" + (window as any).base.version  + " Platform:" + (window as any).base.platform() + " Electron:" + (window as any).base.versions.electron() + " Chromium:" + (window as any).base.versions.chrome() + " Node:" + (window as any).base.versions.node());
        console.log("app:" + (window as any).base.paths.app(process) + " roaming:" + (window as any).base.paths.roaming(process) + " home:" + (window as any).base.paths.home(process) + " temp:" + (window as any).base.paths.temp(process));
        console.log("[template:app]", data.value);
        if(data.value.tools.language.locale === "null"){
            if(data.value.tools.language.current === "zh-CN"){
                data.value.tools.language.locale = "zh";
            }else{
                data.value.tools.language.locale = "en";
            }
        }
        onInitAndListenerResize();
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style>
@import url("./assets/css/font.css");
@import url("./assets/css/base.css");
@import url("./assets/css/theme.css");
@import url("./assets/css/animation.css");
@import url("./assets/css/keyframe.css");
</style>
