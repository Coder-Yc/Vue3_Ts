import { IRootState } from "../index";
import { Module } from "vuex";

interface IloginState {
  token: string;
  userInfo: any;
}

const loginMoudle: Module<IloginState, IRootState> = {
  state: () => {
    return {
      token: "",
      userInfo: "",
    };
  },
};

export default loginMoudle;
