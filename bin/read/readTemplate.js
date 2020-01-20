"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
exports.readTemplate = function (filePath) {
    try {
        var template = fs.readFileSync(filePath, 'utf8');
        return template;
    }
    catch (err) { }
    return '';
};
