type ICommands = {
   initComponents: (workingDir: string) => void
};

export const readScriptParams = (commands: ICommands) => {
   const ops = require('stdio').getopt({
       'src': {key: 's', description: 'Folder with your components'},
       'init': {description: 'Just initialize folder structure'},
   });

   console.log(ops);

   if (ops.init) {
      commands.initComponents(process.argv[1].replace('node_modules/.bin/gen-react-structure', ''));
   }
};
