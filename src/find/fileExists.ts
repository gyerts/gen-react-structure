const fs = require('fs');

export const fileExists = (filePath: string): boolean => {
   try {
      if (fs.existsSync(filePath)) {
         return true;
      }
   } catch(err) {}

   return false;
};
