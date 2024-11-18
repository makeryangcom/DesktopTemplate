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

import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute as $useRoute, useRouter as $useRouter } from "vue-router";

export const useBaseStore = defineStore("base", ()=>{
    const $Store = ref({
        count: 0
    });

    function $GetPlatform(){
        const userAgent = (navigator as any).userAgent;
        if (userAgent.includes("Windows")) {
            return "Windows";
        }
        if (userAgent.includes("Mac")) {
            return "MacOS";
        }
        if (userAgent.includes("Linux")) {
            return "Linux";
        }
        return "-";
    }

    function $RemoveTrim(value: string): string {
        return (value.replace(/[\n\r]/g, "")).trim();
    }
    
    function $CheckEmail(email: string): boolean {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function $Reset(){
        $Store.value.count = 0;
    }

    return {$Store, $useRoute, $useRouter, $GetPlatform, $RemoveTrim, $CheckEmail, $Reset}
});