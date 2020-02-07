import {IReactComponentJson, IReactStructureJson} from "../types";
import {fileExists} from "../find/fileExists";
import {generateTemplate} from "./generateTemplate";
import {readTemplate} from "../read/readTemplate";

const mkdirp = require('mkdirp');
var path = require('path');


const getImplName = (impl: string): string => {
   if (impl.match(/[`"'\-=\/*+,~!@#$%^&()_№<>?]/g)) {
      throw Error(`impl name should not contain any spec symbols exclude . (point symbol), current name is: "${impl}"`);
   }
   return impl.split('.').map(s => `${s[0].toUpperCase()}${s.slice(1)}`).join('');
};

const getComponentName = (componentPath: string): string => {
   return componentPath.split('/').slice(-1)[0];
};

export const generateImpls = (rootPath: string, componentPath: string, reactComponent: IReactComponentJson, reactStructure: IReactStructureJson) => {
   console.log('reactComponent: ', reactComponent);
   reactComponent.impls.map((impl: string) => {
      mkdirp(`${componentPath}/view/${impl}`, function(err: any) {
         if (err) {
            // console.error(err);
         }

         const templatePath = path.join(rootPath, reactStructure.templates.component.view.impls[impl]);
         const dest = path.join(componentPath, 'view', impl, 'index.tsx');

         if (templatePath && !fileExists(dest)) {
            generateTemplate(dest, readTemplate(templatePath), {
               ComponentName: getComponentName(componentPath),
               Impl: getImplName(impl),
            });
         } else {
            console.error(`Impl "${impl}", template was not found`, templatePath, dest, fileExists(dest));
         }

         generateTemplate(`${componentPath}/view/index.tsx`, readTemplate(reactStructure.templates.component.view.index), {
            ComponentName: getComponentName(componentPath),
            Impl: getImplName(impl),
         });
      });
   });
};
