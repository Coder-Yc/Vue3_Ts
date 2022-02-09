import { createStore } from "vuex";
import loginModule from "./login.ts/login";
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
    loginModule,
  },
});

export default store;
export { IRootState };
