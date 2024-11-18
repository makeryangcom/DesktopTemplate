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
import * as $I18n from "vue-i18n";
import en from "./en";
import zh from './zh';

export const useLanguageStore = defineStore("language", ()=>{
    const $local_storage_name = "site:language";
    const $Store = ref({
        local_storage_name: $local_storage_name,
        api: $I18n.createI18n({
            legacy: false,
            locale: $Init(),
            fallbackLocale: "en",
            messages: {
                en: en,
                zh: zh
            },
            warnHtmlMessage: false
        })
    });

    function $Init(){
        let lang: string = "en";
        if(localStorage.getItem($local_storage_name)){
            lang = localStorage.getItem($local_storage_name) + "";
        }else{
            localStorage.setItem($local_storage_name, (navigator as any).language === "zh-CN" ? "zh" : "en");
            lang = (navigator as any).language === "zh-CN" ? "zh" : "en";
        }
        return lang
    }

    function $Update(lang: string){
        localStorage.setItem($local_storage_name, lang);
    }

    function $Format(content: string){
        return content.toLowerCase().replace(/\s+/g, '_');
    }

    function $Reset(){}

    return {$Store, $I18n, $Init, $Update, $Format, $Reset}
});