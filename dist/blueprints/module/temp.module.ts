// import { store } from "@/store"  Remember to add your vuex store import!
import { getModule, Module, VuexModule } from "vuex-module-decorators";

@Module({ dynamic: true, store, name: '{{(name.split('/')[name.split('/').length-1]) | pascalCase}}' })
export class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Module extends VuexModule {

}

export const {{(name.split('/')[name.split('/').length-1]) | camelCase}}: {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Module = getModule({{(name.split('/')[name.split('/').length-1]) | pascalCase}}Module);
