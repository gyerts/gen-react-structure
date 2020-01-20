"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileExists_1 = require("../find/fileExists");
var generateTemplate_1 = require("./generateTemplate");
var readTemplate_1 = require("../read/readTemplate");
var mkdirp = require('mkdirp');
var path = require('path');
exports.generateImpls = function (rootPath, componentPath, reactComponent, reactStructure) {
    console.log('reactComponent: ', reactComponent);
    reactComponent.implementation.map(function (impl) {
        mkdirp(componentPath + "/view/" + impl.workspace, function (err) {
            if (err) {
                // console.error(err);
            }
            impl.layouts.map(function (layout) {
                mkdirp(componentPath + "/view/" + impl.workspace + "/" + layout, function (err) {
                    // console.error(err);
                });
                reactStructure.templates.forEach(function (t) {
                    if (t.workspace === impl.workspace) {
                        var templatePath = path.join(rootPath, t.layouts[layout]);
                        var dest = path.join(componentPath, 'view', impl.workspace, layout, 'index.tsx');
                        if (templatePath && !fileExists_1.fileExists(dest)) {
                            generateTemplate_1.generateTemplate(dest, readTemplate_1.readTemplate(templatePath), {
                                ComponentName: componentPath.split('/').slice(-1)[0],
                            });
                        }
                        else {
                            console.error("In workspace \"" + impl.workspace + "\", was not found template \"" + layout + "\"", templatePath, dest, fileExists_1.fileExists(dest));
                        }
                    }
                });
            });
        });
    });
};
