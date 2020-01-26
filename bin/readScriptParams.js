"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readScriptParams = function (commands) {
    var ops = require('stdio').getopt({
        'src': { key: 's', description: 'Folder with your components' },
        'init': { description: 'Just initialize folder structure' },
        'create': { description: 'Looks for {ComponentName}.crs files and converts them to components' },
    });
    console.log(ops);
    var rootPath = process.argv[1].replace('/node_modules/.bin/gen-react-structure', '');
    if (ops.init) {
        commands.initComponents(rootPath);
    }
    if (ops.create) {
        commands.createComponents(rootPath);
    }
};
