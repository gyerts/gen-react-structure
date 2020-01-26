import fs from 'fs';
import {REACT_STRUCTURE_FILENAME} from "../constants";
import {IReactStructure} from "../types";

export const parseReactStructureJson = (rootPath: string): IReactStructure => {
   const pathToJson = `${rootPath}/${REACT_STRUCTURE_FILENAME}`;
   const fileContent: string = fs.readFileSync(pathToJson).toString('utf-8');
   return JSON.parse(fileContent);
};
