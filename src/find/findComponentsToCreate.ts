import recursive from 'recursive-readdir';
import {REACT_COMPONENT_FILENAME, REACT_CRS_FILENAME} from "../constants";


export type IFoundCreateComponent = {
   path: string,
   componentName: string
};

export const findComponentsToCreate = (rootPath: string): Promise<IFoundCreateComponent[]> => {
   const paths: IFoundCreateComponent[] = [];

   return new Promise<IFoundCreateComponent[]>((resolve, reject) => {
      try {
         recursive(`${rootPath}/src`, (err: Error, files: string[]) => {
            files.map((filePath: string) => {
               if ( filePath.endsWith(REACT_CRS_FILENAME) ) {
                  const fileName = filePath.split('/').pop();
                  if (fileName) {
                     paths.push({
                        path: filePath.replace(`/${fileName}`, ''),
                        componentName: fileName.replace(`${REACT_CRS_FILENAME}`, '')
                     });
                  }
               }
            });
            return resolve(paths)
         });
      } catch (e) {
         return reject()
      }
   });
};
