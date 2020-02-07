"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileExists_1 = require("../find/fileExists");
var generateTemplate_1 = require("./generateTemplate");
var readTemplate_1 = require("../read/readTemplate");
var mkdirp = require('mkdirp');
var path = require('path');
var getImplName = function (impl) {
    if (impl.match(/[`"'\-=\/*+,~!@#$%^&()_№<>?]/g)) {
        throw Error("impl name should not contain any spec symbols exclude . (point symbol), current name is: \"" + impl + "\"");
    }
    return impl.split('.').map(function (s) { return "" + s[0].toUpperCase() + s.slice(1); }).join('');
};
var getComponentName = function (componentPath) {
    return componentPath.split('/').slice(-1)[0];
};
exports.generateImpls = function (rootPath, componentPath, reactComponent, reactStructure) {
    console.log('reactComponent: ', reactComponent);
    reactComponent.impls.map(function (impl) {
        mkdirp(componentPath + "/view/" + impl, function (err) {
            if (err) {
                // console.error(err);
            }
            var templatePath = path.join(rootPath, reactStructure.templates.component.view.impls[impl]);
            var dest = path.join(componentPath, 'view', impl, 'index.tsx');
            if (templatePath && !fileExists_1.fileExists(dest)) {
                generateTemplate_1.generateTemplate(dest, readTemplate_1.readTemplate(templatePath), {
                    ComponentName: getComponentName(componentPath),
                    Impl: getImplName(impl),
                });
            }
            else {
                console.error("Impl \"" + impl + "\", template was not found", templatePath, dest, fileExists_1.fileExists(dest));
            }
            generateTemplate_1.generateTemplate(componentPath + "/view/index.tsx", readTemplate_1.readTemplate(reactStructure.templates.component.view.index), {
                ComponentName: getComponentName(componentPath),
                Impl: getImplName(impl),
            });
        });
    });
};
