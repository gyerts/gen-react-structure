import fs from 'fs';
import {REACT_COMPONENT_FILENAME} from "../constants";
import {IReactComponentJson} from "../types";


export const parseReactComponentJson = (pathToReactComponent: string): IReactComponentJson => {
   const pathToJson = `${pathToReactComponent}/${REACT_COMPONENT_FILENAME}`;
   const fileContent: string = fs.readFileSync(pathToJson).toString('utf-8');
   return JSON.parse(fileContent);
};
