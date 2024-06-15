import Axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const request = Axios.create({
    baseURL: "",
    timeout: 5000,
});

request.interceptors.response.use(
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

export async function Request(path: string, method: string, params: object, data: object) {
    return FingerprintJS.load().then((fp: any) => {
        return fp.get().then((result: any) => {
            return request({
                baseURL: "",
                headers: {
                    "Content-Type": "application/json",
                    "Client-Browser": result.visitorId
                },
                url: path,
                method: method,
                params: params ? params : {},
                data: data ? data : {}
            });
        });
    }).catch(()=>{
        return request({
            baseURL: "",
            headers: {
                "Content-Type": "application/json",
                "Client-Browser": ""
            },
            url: path,
            method: method,
            params: params ? params : {},
            data: data ? data : {}
        });
    });
}