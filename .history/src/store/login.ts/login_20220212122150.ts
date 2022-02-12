import { IRootState } from "../index";
import { Module } from "vuex";
import {
  accountLogin,
  accountInfo,
  userMeuns,
} from "../../servies/login/login";
import LocalCatch from "../../utils/cache";
import router from "../../router/index";
interface IloginState {
  token: string;
  userInfo: any;
  userM: any;
}

const loginMoudle: Module<IloginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userInfo: "",
      userM: "",
    };
  },

  mutations: {
    changeToken: (state, Gettoken) => {
      state.token = Gettoken;
    },
    changeInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    changeMs: (state, UserMs) => {
      state.userM = UserMs;
    },
    getLocalInfo: stats,
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const result = await accountLogin(payload);
      const { id, token } = result.data;
      //token
      commit("changeToken", token);
      LocalCatch.setcatch("token", token);
      //userInfo
      const { data } = await accountInfo(id);
      commit("changeInfo", data);
      LocalCatch.setcatch("userInfo", data);
      //userMeun
      const userM = await userMeuns(data.id);
      commit("changeMs", userM.data);
      LocalCatch.setcatch("userMeun", userM.data);
      //跳转路由
      router.push("/main");
    },
  },
};

export default loginMoudle;
