#!/usr/bin/env node

import {readScriptParams} from "./readScriptParams";
import {findTrackingComponents} from "./find/findTrackingComponents";
import {parseReactComponentJson} from "./parse/reactComponentJson";
import {generateImpls} from "./generate/impls";
import {parseReactStructureJson} from "./parse/reactStructureJson";
import {findComponentsToCreate} from "./find/findComponentsToCreate";
import {generateComponent} from "./generate/component";

export const initComponents = async (workingDir: string) => {
   const paths: string[] = await findTrackingComponents(workingDir);
   console.log('found components:', paths);

   const reactStructure = parseReactStructureJson(workingDir);

   console.log('reactStructure:', reactStructure);

   paths.map(path => {
      generateImpls( workingDir, path, parseReactComponentJson(path), reactStructure);
   });
};

export const createComponents = async (workingDir: string) => {
   const reactStructure = parseReactStructureJson(workingDir);

   const paths: {
      path: string,
      componentName: string
   }[] = await findComponentsToCreate(workingDir);
   console.log('found components:', paths);

   paths.forEach(path => {
      generateComponent(path.path, path.componentName, reactStructure);
   });

   await initComponents(workingDir);
};

readScriptParams({
   initComponents,
   createComponents,
});
