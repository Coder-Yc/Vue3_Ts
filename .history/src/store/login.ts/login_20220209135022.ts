import { IRootState } from "../index";
import { ModuleTree } from "vuex";

interface IloginState {
  token: string;
  userInfo: any;
}

const loginMoudle: ModuleTree<IRootState> = {
  state: () => {
    return {
      token: "",
      userInfo: "",
    };
  },
};
