"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readScriptParams = function (commands) {
    var ops = require('stdio').getopt({
        'src': { key: 's', description: 'Folder with your components' },
        'init': { description: 'Just initialize folder structure' },
    });
    console.log(ops);
    if (ops.init) {
        commands.initComponents(process.argv[1].replace('/node_modules/.bin/gen-react-structure', ''));
    }
};
