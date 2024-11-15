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

import {spawn} from "child_process";
import {build, createServer} from "vite";
import electron from "electron";

function watchMain(server) {
    const address = server.httpServer.address();
    const env = Object.assign(process.env, {
        VITE_DEV_SERVER_HOST: address.address,
        VITE_DEV_SERVER_PORT: address.port,
    });

    return build({
        configFile: "tools/script/main/vite.config.ts",
        mode: "development",
        plugins: [{
            name: "electron-main-watcher",
            writeBundle(command, options) {
                if (process.electronApp) {
                    process.electronApp.removeAllListeners()
                    process.electronApp.kill()
                }
                process.electronApp = spawn(electron, [".", "--no-sandbox"], {stdio: "inherit", env})
                process.electronApp.once("exit", process.exit)
            },
        }],
        build: {
            watch: {},
        },
    })
}

function watchPreload(server) {
    return build({
        configFile: "tools/script/preload/vite.config.ts",
        mode: "development",
        plugins: [{
            name: "electron-preload-watcher",
            writeBundle() {
                server.ws.send({type: "full-reload"})
            }
        }],
        build: {
            watch: {},
        },
    })
}

const server = await createServer({configFile: "template/vite.config.ts"});

await server.listen();
await watchPreload(server);
await watchMain(server);
