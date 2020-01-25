export type IReactStructure = {
   "layouts": { "name": string }[],
   "mainLayout": string,
   "workspaces": { "name": string }[],

   "templates": {
      "index": string,
      "impls": {
         "workspace": string,
         "layouts": { [key: string]: string } // layout: templatePath
      }[]
   }
}

export type IImpl = {
   workspace: string
   layouts: string[]
};

export type IReactComponent = {
   implementation: IImpl[]
}

export type IVariables = {
   ComponentName: string
}
