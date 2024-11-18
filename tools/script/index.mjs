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

import * as FileAPI from "fs";
import PathAPI from "path";

FileAPI.writeFileSync("release/.gitkeep", "");

const Index = FileAPI.readFileSync("release/dist/template/index.html", {encoding: "utf8"});
const NewIndex = Index.replace(/.\/monacoeditorwork/g, '"monacoeditorwork');
FileAPI.writeFileSync("release/dist/template/index.html", NewIndex);

const icons = FileAPI.readdirSync("tools/icons", {withFileTypes: true});
FileAPI.mkdirSync("release/dist/icons", {recursive: true});
for (let item of icons) {
    let srcPath = PathAPI.join("tools/icons", item.name);
    let destPath = PathAPI.join("release/dist/icons", item.name);
    FileAPI.copyFileSync(srcPath, destPath);
}

FileAPI.mkdirSync("release/dist/software", {recursive: true});
const nets = FileAPI.readdirSync("tools/software", {withFileTypes: true});
for (let item of nets) {
    let srcPath = PathAPI.join("tools/software", item.name);
    let destPath = PathAPI.join("release/dist/software", item.name);
    FileAPI.copyFileSync(srcPath, destPath);
}