import recursive from 'recursive-readdir';
import {REACT_COMPONENT_FILENAME} from "../constants";


export const findTrackingComponents = (rootPath: string): Promise<string[]> => {
   const paths: string[] = [];

   return new Promise<string[]>((resolve, reject) => {
      try {
         recursive(`${rootPath}/src`, (err: Error, files: string[]) => {
            files.map((filePath: string) => {
               if ( filePath.endsWith(REACT_COMPONENT_FILENAME) ) {
                  paths.push(filePath.replace(`/${REACT_COMPONENT_FILENAME}`, ''));
               }
            });
            return resolve(paths)
         });
      } catch (e) {
         return reject()
      }
   });
};
