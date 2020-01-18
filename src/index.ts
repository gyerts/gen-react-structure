import recursive from 'recursive-readdir';
import fs from 'fs';
import {readScriptParams} from "./readScriptParams";

export const initComponents = (workingDir: string) => {
   // const fileContent: string = fs.readFileSync(`${distPath}/phrases.txt`).toString('utf-8');

   console.log(workingDir)

   // recursive(`${distPath}/translates`, (err: Error, files: string[]) => {
   //    console.log(files);
      // files.map((filePath: string) => {
      //    generateTypesFile(distTypesFile, phrases);
      // });
   // });
};

readScriptParams({
   initComponents
});
