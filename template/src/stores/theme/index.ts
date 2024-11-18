// Copyright 2024 MakerYang, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useDark } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { styles } from "../../packages/york/styles";
import { type Theme, themes } from "../../packages/york/themes";

export const useThemeStore = defineStore("theme", ()=>{

    const $local_storage_name = "armcnc:";

    type $Color = | "zinc" | "slate" | "stone" | "gray" | "neutral" | "red" | "rose" | "orange" | "green" | "blue" | "yellow" | "violet";

    const $Colors: $Color[] = ["zinc", "rose", "blue", "green", "orange", "red", "slate", "stone", "gray", "neutral", "yellow", "violet"];

    const RADII = [0, 0.25, 0.5, 0.75, 1];

    const $Store = ref({
        local_storage_name: $local_storage_name,
        colors: $Colors,
        theme: localStorage.getItem($local_storage_name + ":theme") ? localStorage.getItem($local_storage_name + ":theme") : "zinc",
        radius: localStorage.getItem($local_storage_name + ":radius") ? Number(localStorage.getItem($local_storage_name + ":radius")) : 0.5,
        style: styles[1].name,
    });

    const $useDark = useDark({storageKey: $Store.value.local_storage_name + ":dark"});

    const themeClass = computed(() => `theme-${$Store.value.theme}`);
    const theme = computed(() => $Store.value.theme);
    const radius = computed(() => $Store.value.radius);
    const style = computed(() => $Store.value.style);

    function setTheme(themeName: Theme["name"]) {
        $Store.value.theme = themeName;
        localStorage.setItem($Store.value.local_storage_name + ":theme", $Store.value.theme);
    }

    function setRadius(newRadius: number) {
        $Store.value.radius = newRadius;
        localStorage.setItem($Store.value.local_storage_name + ":radius", $Store.value.radius+"");
    }

    const themePrimary = computed(() => {
        const t = themes.find(t => t.name === theme.value);
        return `hsl(${
            t?.cssVars[$useDark ? "dark" : "light"].primary
        })`;
    });

    function $Reset(){}

    return {$Store, $useDark, $Colors,  RADII, theme, setTheme, radius, setRadius, themeClass, style, themePrimary, $Reset}
});