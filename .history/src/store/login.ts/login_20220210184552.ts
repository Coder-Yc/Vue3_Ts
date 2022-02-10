import { IRootState } from "../index";
import { Module } from "vuex";
import { accountLogin, accountInfo } from "../../servies/login/login";
import LocalCatch from "../../utils/cache";

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

  mutations: {
    changeToken: (state, Gettoken) => {
      state.token = Gettoken;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const result = await accountLogin(payload);
      const { id, token } = result.data;
      commit("changeToken", token);
      LocalCatch.setcatch("token", token);

      const userInfo = await accountInfo(id);
      console.log(userInfo);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行了phoneLoginAction函数", payload);
    },
  },
};

export default loginMoudle;
