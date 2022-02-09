import { createStore } from "vuex";

interface IRootState {
  name: string;
  age: number;
}

const store = createStore({
  state: () => {
    return {
      name: "coderwwhy",
    };
  },
});

export default store;
