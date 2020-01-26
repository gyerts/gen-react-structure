import {IImpl, IReactComponent, IReactStructure} from "../types";
import {fileExists} from "../find/fileExists";
import {generateTemplate} from "./generateTemplate";
import {readTemplate} from "../read/readTemplate";

const mkdirp = require('mkdirp');
var path = require('path');


export const generateComponent = (componentPath: string, componentName: string, reactStructure: IReactStructure) => {
   console.log('* create folder:', path.join(componentPath, componentName));
   mkdirp(path.join(componentPath, componentName), function(err: any) {
      if (err) {
         console.error(err);
      }

      generateTemplate(path.join(componentPath, componentName, 'index.tsx'), readTemplate(reactStructure.templates.component.index), {
         ComponentName: componentName,
      });

      generateTemplate(path.join(componentPath, componentName, 'react-component.json'), readTemplate(reactStructure.templates.component.reactStructureJson), {
         ComponentName: componentName,
      });
   });
};
