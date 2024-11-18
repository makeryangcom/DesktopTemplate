<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button class="w-8 h-8" variant="ghost" size="icon">
                <Paintbrush class="w-4 h-4" />
            </Button>
        </PopoverTrigger>
        <PopoverContent :side-offset="12" align="end" class="w-96 border-b border-border">
            <div class="p-2">
                <div class="grid space-y-1">
                    <h1 class="text-sm text-foreground font-semibold">{{props.data.tools.language.t("header.theme.title")}}</h1>
                    <p class="text-xs text-muted-foreground">{{props.data.tools.language.t("header.theme.describe")}}</p>
                </div>
                <div class="space-y-1 pt-3">
                    <Label for="color" class="text-xs text-muted-foreground">{{props.data.tools.language.t("header.theme.color")}}</Label>
                    <div class="grid grid-cols-3 gap-2 py-1.5">
                        <Button v-for="(color, index) in props.data.theme.api.$Colors" :key="index" variant="outline" class="h-8 justify-start px-3" :class="color === props.data.theme.api.theme ? 'border-foreground border-2' : ''" @click="props.data.theme.api.setTheme(color)">
                            <span class="h-5 w-5 rounded-full flex items-center justify-center bg-muted" :style="{ backgroundColor: colors[color][7].rgb }">
                                <CheckIcon v-if="color === props.data.theme.api.theme" class="h-3 w-3 text-white"/>
                            </span>
                            <span class="ml-2 text-xs capitalize">{{color}}</span>
                        </Button>
                    </div>
                </div>
                <div class="space-y-1 pt-3">
                    <Label for="radius" class="text-xs text-muted-foreground">{{props.data.tools.language.t("header.theme.radius")}}</Label>
                    <div class="grid grid-cols-5 gap-2 py-1.5">
                        <Button v-for="(r, index) in props.data.theme.api.RADII" :key="index" variant="outline" class="h-8 justify-center px-3" :class="r === props.data.theme.api.radius ? 'border-foreground border-2' : ''" @click="props.data.theme.api.setRadius(r)">
                            <span class="text-xs">{{ r }}</span>
                        </Button>
                    </div>
                </div>
                <div class="space-y-1 pt-3">
                    <Label for="theme" class="text-xs text-muted-foreground">{{props.data.tools.language.t("header.theme.style")}}</Label>
                    <div class="flex space-x-2 py-1.5">
                        <Button class="h-8" variant="outline" :class="{ 'border-2 border-foreground': !props.data.theme.api.$useDark }" @click="props.data.theme.api.$useDark = false">
                            <SunIcon class="w-4 h-4 mr-2" />
                            <span class="text-xs">Light</span>
                        </Button>
                        <Button class="h-8" variant="outline" :class="{ 'border-2 border-foreground': props.data.theme.api.$useDark }" @click="props.data.theme.api.$useDark = true">
                            <MoonIcon class="w-4 h-4 mr-2" />
                            <span class="text-xs">Dark</span>
                        </Button>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>

<script setup lang="ts">
import { CheckIcon, MoonIcon, SunIcon } from "@radix-icons/vue";
import { Paintbrush } from "lucide-vue-next";
import { nextTick, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, watch } from "vue";
import { Button, Label, Popover, PopoverContent, PopoverTrigger } from "../../../packages/york";
import { colors } from "../../../packages/york/colors";

const props: any = defineProps<{
    data: any
}>();

watch(props.data.theme, (theme: any) => {
    document.documentElement.classList.remove(
        ...props.data.theme.api.$Colors.map((color: any) => `theme-${color}`),
    );
    document.documentElement.classList.add(`theme-${props.data.theme.api.theme}`);
});

watch(props.data.theme, (radius: any) => {
    document.documentElement.style.setProperty("--radius", `${props.data.theme.api.radius}rem`)
});

onBeforeMount(() => {});

onMounted(() => {
    document.documentElement.style.setProperty("--radius", `${props.data.theme.api.radius}rem`);
    document.documentElement.classList.add(`theme-${props.data.theme.api.theme}`);
    nextTick(() => {
        console.log("[template:view:common:header:theme]", props.data);
    });
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>

<style scoped>

</style>