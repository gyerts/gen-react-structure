import {IVariables} from "../types";
var fs = require('fs');


export const generateTemplate = (dest: string, template: string, variables: IVariables) => {
   console.log('generate template to:', dest);
   if (!fs.existsSync(dest)) {
      let templ = template;

      templ = templ.replace(/{{ComponentName}}/g, variables.ComponentName);
      variables.Impl && (templ = templ.replace(/{{Impl}}/g, variables.Impl));

      console.log(templ);

      try {
         fs.writeFileSync(dest, templ);
      } catch (e) {
         console.error('Cannot write template to folder', dest, template, variables, e);
      }
   }
};
