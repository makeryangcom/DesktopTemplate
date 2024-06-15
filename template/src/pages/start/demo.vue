<template>
    <div class="w-full h-full p-4 space-y-4">
        <div class="w-full">Hello Desktop Template</div>
        <div class="w-full grid grid-flow-col auto-cols-max gap-4">
            <Button @click="onDemo('default')">Button</Button>
            <Button variant="secondary" @click="onDemo('warning')">Secondary</Button>
            <Button variant="destructive" @click="onDemo('error')">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
        </div>
        <div class="w-full grid grid-flow-col auto-cols-max gap-4">
            <Button variant="outline" size="icon">
                <ChevronLeftIcon class="w-4 h-4" />
            </Button>
            <Button>
                <EnvelopeOpenIcon class="w-4 h-4 mr-2" />
                <span>Login with Email</span>
            </Button>
            <Button disabled>
                <ReloadIcon class="w-4 h-4 mr-2 animate-spin" />
                <span>Please wait</span>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, nextTick} from "vue";
import {Button} from "@/lib/button";
import {ChevronLeftIcon, EnvelopeOpenIcon, ReloadIcon} from "@radix-icons/vue";

const props: any = defineProps<{
    data: any
}>();

function onDemo(variant: string){
    props.data.browser.toast({
        title: "提示",
        description: "点击了按钮",
        variant: variant,
    });
}

onBeforeMount(() => {});

onMounted(() => {
    nextTick(() => {});
});

onBeforeUnmount(() => {});

onUnmounted(() => {});
</script>