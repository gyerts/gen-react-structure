import fs from 'fs';
import {REACT_COMPONENT_FILENAME} from "../constants";


export const parseReactComponentJson = (pathToReactComponent: string) => {
   const pathToJson = `${pathToReactComponent}/${REACT_COMPONENT_FILENAME}`;
   const fileContent: string = fs.readFileSync(pathToJson).toString('utf-8');
   return JSON.parse(fileContent);
};
