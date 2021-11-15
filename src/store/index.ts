import { InjectionKey } from '@vue/runtime-core';
import { createStore, ModuleTree, Store, useStore as baseUseStore } from 'vuex';



// 导入所有子模块 vite
// /^\.\/*(.*)\/*\.(js|ts)$/g;
// /^\.\/routes(.*)\/route\.(js|ts)$/g

const modulesFiles = import.meta.globEager('./modules/**/*.{js,ts}');

// 所有store modules
const storeModules: ModuleTree<any> = Object.keys(modulesFiles).reduce((prev, key) => {
  const keyName = key.replace(/[.]\/([^/]*)\/([^/]*)\/([^/]*)$/g, '$2');
  const modules = modulesFiles[key].default;
  return key.indexOf('index') !== -1? { ...prev, [keyName]: { ...modules} }: prev;
}, {});

// 创建store 实例
export const store = createStore({
  modules: storeModules,
  strict: import.meta.env.NODE_ENV !== 'production',
});

export const key: InjectionKey<Store<any>> = Symbol('test-permission');
/**
 * @description 简易化useStore 在vue文件中可直接引用
 * @returns
 */
export function useStore<T = any>(): Store<T> {
  return baseUseStore<T>(key);
}
