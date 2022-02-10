import { IRootState } from "../index";
import { Module } from "vuex";
import accountLogin from '../../servies/login/login'

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
      cosnt result = await

      // console.log("执行了accountLoginAction函数,", payload);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行了phoneLoginAction函数", payload);
    },
  },
};

export default loginMoudle;
