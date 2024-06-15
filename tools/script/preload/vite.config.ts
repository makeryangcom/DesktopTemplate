import {defineConfig} from "vite";
import {join} from "path";
import {builtinModules} from "module";
// @ts-ignore
import wasm from "vite-plugin-wasm";
// @ts-ignore
import topLevelAwait from "vite-plugin-top-level-await";
import Package from "../../../package.json";

export default defineConfig({
    root: __dirname,
    plugins: [
        wasm(),
        topLevelAwait()
    ],
    build: {
        outDir: "../../../release/dist/preload",
        emptyOutDir: true,
        minify: "terser",
        sourcemap: false,
        rollupOptions: {
            input: {
                index: join(__dirname, "index.ts")
            },
            output: {
                format: "cjs",
                entryFileNames: "[name].cjs",
                manualChunks: {},
            },
            external: [
                "electron",
                ...builtinModules,
                ...builtinModules.map(e => `node:${e}`),
                ...Object.keys(Package.dependencies || {}),
            ],
        },
    }
})
