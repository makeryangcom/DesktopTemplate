/// <reference types="vite/client" />
import * as RadixIcons from '@radix-icons/vue';

declare module "*.vue" {
    import type {DefineComponent} from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}