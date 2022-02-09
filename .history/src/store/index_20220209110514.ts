import { createStore } from "vuex";

interface IRootState {
  name: string;
  age: number;
}

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "coderwwhy",
    };
  },
  mutations: {},
});

export default store;
