"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
exports.generateTemplate = function (dest, template, variables) {
    console.log('generate template to:', dest);
    if (!fs.existsSync(dest)) {
        var templ = template;
        templ = templ.replace(/{{ComponentName}}/g, variables.ComponentName);
        variables.Impl && (templ = templ.replace(/{{Impl}}/g, variables.Impl));
        console.log(templ);
        try {
            fs.writeFileSync(dest, templ);
        }
        catch (e) {
            console.error('Cannot write template to folder', dest, template, variables, e);
        }
    }
};
