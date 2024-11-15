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

import Os from "os";
import Path from "path";
import File from "fs";
import {ipcRenderer} from "electron";
import * as Config from "../../../package.json";

(window as any).base = {
    os: Os,
    path: Path,
    process: process,
    platform: Os.platform(), //darwin、linux、win32
    config: Config,
    file: File,
    ipc: ipcRenderer,
    lang: {
        t: false,
        locale: false
    },
    window: {
        max: false
    },
}