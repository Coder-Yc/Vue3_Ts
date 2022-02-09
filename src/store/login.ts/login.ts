import { IRootState } from "../index";
import { Module } from "vuex";

interface IloginState {
  token: string;
  userInfo: any;
}

const loginMoudle: Module<IloginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userInfo: "",
    };
  },
  actions: {
    accountLoginAction({ commit }, payload) {
      console.log("执行了accountLoginAction函数,");
    },
  },
};

export default loginMoudle;
