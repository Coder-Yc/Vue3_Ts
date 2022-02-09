import { createStore } from "vuex";

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
});

export default store;
export  IRootState;
