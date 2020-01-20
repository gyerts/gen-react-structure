import fs from 'fs';
import {REACT_STRUCTURE_FILENAME} from "../constants";

export const parseReactStructureJson = (rootPath: string) => {
   const pathToJson = `${rootPath}/${REACT_STRUCTURE_FILENAME}`;
   const fileContent: string = fs.readFileSync(pathToJson).toString('utf-8');
   return JSON.parse(fileContent);
};
