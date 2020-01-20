"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var constants_1 = require("../constants");
exports.parseReactComponentJson = function (pathToReactComponent) {
    var pathToJson = pathToReactComponent + "/" + constants_1.REACT_COMPONENT_FILENAME;
    var fileContent = fs_1.default.readFileSync(pathToJson).toString('utf-8');
    return JSON.parse(fileContent);
};
