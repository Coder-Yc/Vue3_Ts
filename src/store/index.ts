import { createStore } from "vuex";
import login from "./login.ts/login";
import system from './system/system'
interface IRootState {
  name: string;
  age: number;
}

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "coderwwhy",
      age: 12,
    };
  },
  mutations: {},
  modules: {
    login,
    system,
  },
});

export function getStoreInfo() {
  store.dispatch("login/getLocalCatch");
}


export default store;
export { IRootState };
