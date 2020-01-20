"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
exports.fileExists = function (filePath) {
    try {
        if (fs.existsSync(filePath)) {
            return true;
        }
    }
    catch (err) { }
    return false;
};
