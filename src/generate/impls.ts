import {IImpl, IReactComponent, IReactStructure} from "../types";
import {fileExists} from "../find/fileExists";
import {generateTemplate} from "./generateTemplate";
import {readTemplate} from "../read/readTemplate";

const mkdirp = require('mkdirp');
var path = require('path');


export const generateImpls = (rootPath: string, componentPath: string, reactComponent: IReactComponent, reactStructure: IReactStructure) => {
   console.log('reactComponent: ', reactComponent);
   reactComponent.implementation.map((impl: IImpl) => {
      mkdirp(`${componentPath}/view/${impl.workspace}`, function(err: any) {
         if (err) {
            // console.error(err);
         }
         impl.layouts.map((layout: string) => {
            mkdirp(`${componentPath}/view/${impl.workspace}/${layout}`, function(err: any) {
               // console.error(err);
            });

            reactStructure.templates.impls.forEach(t => {
               if (t.workspace === impl.workspace) {
                  const templatePath = path.join(rootPath, t.layouts[layout]);
                  const dest = path.join(componentPath, 'view', impl.workspace, layout, 'index.tsx');

                  if (templatePath && !fileExists(dest)) {
                     generateTemplate(dest, readTemplate(templatePath), {
                        ComponentName: componentPath.split('/').slice(-1)[0],
                     });
                  } else {
                     console.error(`In workspace "${impl.workspace}", was not found template "${layout}"`, templatePath, dest, fileExists(dest));
                  }
               }
            });
         });

         generateTemplate(`${componentPath}/view/index.tsx`, readTemplate(reactStructure.templates.index), {
            ComponentName: componentPath.split('/').slice(-1)[0],
         });
      });
   });
};
