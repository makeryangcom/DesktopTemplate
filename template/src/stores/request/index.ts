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

import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRequestStore = defineStore("request", ()=>{
    const $Store = ref({
        host: "",
        referer: "site.com",
        local_storage_name: "site:login:token",
        request: Axios.create({
            baseURL: "",
            timeout: 60000,
        })
    });

    $Store.value.request.interceptors.response.use(
        response => {
            if (response.status === 200) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        },
        error => {
            if(error.response){
                if (error.response.status) {
                    return false;
                }
            }
            return false;
        }
    );

    function $Request(path: string, method: string, params: object, data: object): any {
        return FingerprintJS.load().then((fp: any) => {
            return fp.get().then((result: any) => {
                return $Store.value.request({
                    baseURL: $Store.value.host,
                    headers: {
                        "Content-Type": "application/json",
                        "Content-X-Time": Date.now().toString(),
                        "Content-X-Device": result.visitorId,
                        "Content-X-Referer": $Store.value.referer,
                        "Content-X-Source": "browser",
                        "Content-X-IP": "0.0.0.0",
                        "Content-X-Sign": localStorage.getItem($Store.value.local_storage_name) ? localStorage.getItem($Store.value.local_storage_name) : ""
                    },
                    url: path,
                    method: method,
                    params: params ? params : {},
                    data: data ? data : {}
                });
            });
        }).catch(()=>{
            return $Store.value.request({
                baseURL: $Store.value.host,
                headers: {
                    "Content-Type": "application/json",
                    "Content-X-Time": Date.now().toString(),
                    "Content-X-Device": "",
                    "Content-X-Referer": $Store.value.referer,
                    "Content-X-Source": "browser",
                    "Content-X-IP": "0.0.0.0",
                    "Content-X-Sign": $Store.value.local_storage_name,
                },
                url: path,
                method: method,
                params: params ? params : {},
                data: data ? data : {}
            });
        });
    }

    function $Reset(){}

    return {$Store, $Request, $Reset}
});