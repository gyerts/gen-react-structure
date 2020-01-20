const fs = require('fs');

export const readTemplate = (filePath: string): string => {
   try {
      const template = fs.readFileSync(filePath, 'utf8');
      return template;
   } catch(err) {}

   return '';
};
