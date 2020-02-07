export type IReactStructureJson = {
   impls: { name: string }[],
   mainImpl: string,

   templates: {
      component: {
         index: string
         reactStructureJson: string
         view: {
            index: string
            impls: { [key: string]: string } // impl: template-path
         }
      }
   }
}

export type IReactComponentJson = {
   impls: string[]
};

export type IVariables = {
   ComponentName: string
   Impl?: string
}
