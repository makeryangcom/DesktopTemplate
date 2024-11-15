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


import path from "path";
import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import vueDevTools from "vite-plugin-vue-devtools";
import Package from "../package.json";

const timestamp = (length: number)=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export default defineConfig(({mode})=> ({
    root: __dirname,
    base: "./",
    define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
        __APP_NAME__: JSON.stringify(Package.title),
		__APP_VERSION__: JSON.stringify(Package.version),
    },
    esbuild: {
        drop: mode === "production" ? ["console", "debugger"] : [],
    },
    plugins: [
        vue(
            {
                template: {
                    compilerOptions: {
                        isCustomElement: (tag: any) => ["webview"].includes(tag),
                    }
                }
            }
        ),
        vueDevTools(),
    ],
    server: {
        host: Package.env.VITE_DEV_SERVER_HOST,
        port: Package.env.VITE_DEV_SERVER_PORT,
        proxy: {
            "/backend": {
                target: "https://backend.domain.com",
                secure: false,
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/backend/, '')
            },
        }
    },
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        }
    },
    build: {
        outDir: "../release/dist/template",
        emptyOutDir: true,
        sourcemap: false,
        cssCodeSplit: true,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            treeshake: true,
            output: {
                entryFileNames: `index/[name]-${Package.version}-${timestamp(16)}.js`,
                chunkFileNames: `chunks/[hash]-${Package.version}-${timestamp(16)}.js`,
                assetFileNames: `assets/[hash]-${Package.version}-${timestamp(16)}.[ext]`,
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        const dependenciesKeys = Object.keys(Package.dependencies);
                        const match = dependenciesKeys.find((item) => {
                            return id.includes(item);
                        });
                        const notSplit = ["vue"];
                        if (match && !notSplit.includes(match)) {
                            return match;
                        }
                    }
                }
            }
        },
        commonjsOptions: {
            requireReturnsDefault: "namespace",
        }
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
}))
