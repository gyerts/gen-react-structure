import {IVariables} from "../types";
var fs = require('fs');


export const generateTemplate = (dest: string, template: string, variables: IVariables) => {
   console.log('generate template to:', dest);
   let templ = template;

   templ = templ.replace(/{{ComponentName}}/g, variables.ComponentName);

   console.log(templ);

   try {
      fs.writeFileSync(dest, templ);
   } catch (e) {
      console.error('Cannot write template to folder', dest, template, variables, e);
   }
};
