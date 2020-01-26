type ICommands = {
   initComponents: (workingDir: string) => void
   createComponents: (workingDir: string) => void
};

export const readScriptParams = (commands: ICommands) => {
   const ops = require('stdio').getopt({
       'src': {key: 's', description: 'Folder with your components'},
       'init': {description: 'Just initialize folder structure'},
       'create': {description: 'Looks for {ComponentName}.crs files and converts them to components'},
   });

   console.log(ops);

   const rootPath = process.argv[1].replace('/node_modules/.bin/gen-react-structure', '');

   if (ops.init) {
      commands.initComponents(rootPath);
   }
   if (ops.create) {
      commands.createComponents(rootPath);
   }
};
