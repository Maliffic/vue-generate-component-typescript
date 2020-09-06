import { store } from "@/modules/core/store/store";
import { getModule, Module, VuexModule } from "vuex-module-decorators";

@Module({ dynamic: true, store, name: "Notification" })
export class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Module extends VuexModule {

}

export const {{(name.split('/')[name.split('/').length-1]) | pascalCase}}: {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Module = getModule({{(name.split('/')[name.split('/').length-1]) | pascalCase}}Module);
