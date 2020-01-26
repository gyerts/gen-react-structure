"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateTemplate_1 = require("./generateTemplate");
var readTemplate_1 = require("../read/readTemplate");
var mkdirp = require('mkdirp');
var path = require('path');
exports.generateComponent = function (componentPath, componentName, reactStructure) {
    console.log('* create folder:', path.join(componentPath, componentName));
    mkdirp(path.join(componentPath, componentName), function (err) {
        if (err) {
            console.error(err);
        }
        generateTemplate_1.generateTemplate(path.join(componentPath, componentName, 'index.tsx'), readTemplate_1.readTemplate(reactStructure.templates.component.index), {
            ComponentName: componentName,
        });
        generateTemplate_1.generateTemplate(path.join(componentPath, componentName, 'react-component.json'), readTemplate_1.readTemplate(reactStructure.templates.component.reactStructureJson), {
            ComponentName: componentName,
        });
    });
};
