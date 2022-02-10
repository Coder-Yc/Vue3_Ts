import { IRootState } from "../index";
import { Module } from "vuex";
import _Result from "element-plus/lib/el-result";

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
cosnt result =

      // console.log("执行了accountLoginAction函数,", payload);
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行了phoneLoginAction函数", payload);
    },
  },
};

export default loginMoudle;
