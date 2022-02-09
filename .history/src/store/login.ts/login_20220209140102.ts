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
    accountLoginAction();,
  },
};

export default loginMoudle;
