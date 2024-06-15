import {createRouter, createWebHistory } from "vue-router";
import Start from "../../pages/start.vue";

const routes: any = [
    {
        path: "/",
        name: "Start",
        component: Start
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
});