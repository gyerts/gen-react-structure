"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
exports.generateTemplate = function (dest, template, variables) {
    console.log('generate template to:', dest);
    var templ = template;
    templ = templ.replace(/{{ComponentName}}/g, variables.ComponentName);
    variables.Ws && (templ = templ.replace(/{{Ws}}/g, variables.Ws));
    variables.Layout && (templ = templ.replace(/{{Layout}}/g, variables.Layout));
    console.log(templ);
    try {
        fs.writeFileSync(dest, templ);
    }
    catch (e) {
        console.error('Cannot write template to folder', dest, template, variables, e);
    }
};
