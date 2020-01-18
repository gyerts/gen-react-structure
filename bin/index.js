#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readScriptParams_1 = require("./readScriptParams");
exports.initComponents = function (workingDir) {
    // const fileContent: string = fs.readFileSync(`${distPath}/phrases.txt`).toString('utf-8');
    console.log(workingDir);
    // recursive(`${distPath}/translates`, (err: Error, files: string[]) => {
    //    console.log(files);
    // files.map((filePath: string) => {
    //    generateTypesFile(distTypesFile, phrases);
    // });
    // });
};
readScriptParams_1.readScriptParams({
    initComponents: exports.initComponents
});
