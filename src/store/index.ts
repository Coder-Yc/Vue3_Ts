import { createStore } from "vuex";
import login from "./login.ts/login";
import system from './system/system'
import dashboard from "./asysic/dashboard";
import { getrolesList, getdepartmentList } from "@/servies/system/system";

interface IRootState {
  roles: any,
  department: any
}

const store = createStore<IRootState>({
  state: () => {
    return {
      roles: [],
      department: []
    };
  },
  mutations: {
    changeRolesList(store, payload) {
      store.roles = payload.list
    },
    changeDepartmentList(store, payload) {
      store.department = payload.list
    }
  },
  actions: {
    async getRolesListAction({commit}, payload) {
      const url = payload.pageName + '/list'
      const data = payload.queryInfo
      const result = await getrolesList(url, data)
      commit('changeRolesList', result.data)

    },
    async getDepartmentListAction({commit}, payload) {
      const url = payload.pageName + '/list'
      const data = payload.queryInfo
      const result = await getdepartmentList(url, data)
      commit('changeDepartmentList', result.data)
    }
  },
  modules: {
    login,
    system,
    dashboard
  },
});





export function getStoreInfo() {
  store.dispatch("login/getLocalCatch");
}


export default store;
export { IRootState };
