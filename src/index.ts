#!/usr/bin/env node

import {readScriptParams} from "./readScriptParams";
import {findTrackingComponents} from "./find/findTrackingComponents";
import {parseReactComponentFileStructure} from "./parse/reactComponentJson";
import {parseReactComponentJson} from "./parse/reactComponentFileStructure";
import {generateImpls} from "./generate/impls";
import {parseReactStructureJson} from "./parse/reactStructureJson";

export const initComponents = async (workingDir: string) => {
   const paths: string[] = await findTrackingComponents(workingDir);
   console.log('found components:', paths);

   const reactStructure = parseReactStructureJson(workingDir);

   console.log('reactStructure:', reactStructure);

   paths.map(path => {
      generateImpls( workingDir, path, parseReactComponentJson(path), reactStructure);
      parseReactComponentFileStructure(path);
   });
};

readScriptParams({
   initComponents
});
