import { IRootState } from "../index";
import { Module } from "vuex";
import { accountLogin } from "../../servies/login/login";

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
    async accountLoginAction({ commit }, payload: any) {
      const result = await accountLogin(payload);
      console.log("123S");

      console.log(result);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行了phoneLoginAction函数", payload);
    },
  },
};

export default loginMoudle;
