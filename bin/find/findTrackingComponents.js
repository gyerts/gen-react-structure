"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var recursive_readdir_1 = __importDefault(require("recursive-readdir"));
var constants_1 = require("../constants");
exports.findTrackingComponents = function (rootPath) {
    var paths = [];
    return new Promise(function (resolve, reject) {
        try {
            recursive_readdir_1.default(rootPath + "/src", function (err, files) {
                files.map(function (filePath) {
                    if (filePath.endsWith(constants_1.REACT_COMPONENT_FILENAME)) {
                        paths.push(filePath.replace("/" + constants_1.REACT_COMPONENT_FILENAME, ''));
                    }
                });
                return resolve(paths);
            });
        }
        catch (e) {
            return reject();
        }
    });
};
