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