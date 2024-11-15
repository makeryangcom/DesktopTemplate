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

import {createI18n} from "vue-i18n";
import en from "./en";
import zh from './zh';

const messages = {
    en: en,
    zh: zh
};

function init(){
    let lang: string = "en";
    if(localStorage.getItem("language")){
        lang = localStorage.getItem("language") + ""
    }else{
        localStorage.setItem("language", "en")
    }
    return lang
}

export {useI18n} from "vue-i18n";
export const Language = createI18n({
    legacy: false,
    locale: init(),
    fallbackLocale: "en",
    messages,
    warnHtmlMessage: false
});

export const Format = function (content: string){
    return content.toLowerCase().replace(/\s+/g, '_');
}