import { getDataLists } from "@/servies/system/system";
import { IRootState } from "@/store";
import {Module} from 'vuex'


interface IuserData {
  usersList: any
  departmentList: any
  totalList: Number
  roleList:any
  menuList: any
}
const userMoudle:Module <IuserData, IRootState>  = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      departmentList: [],
      menuList: [],
      roleList: [],

      totalList: 0
    }
  },
  getters: {
    pageDataList(state) {
      return (pageName: string) => {
       return (state as any)[`${pageName}List`]
      }
    }
  },
  mutations: {
    changeusersList : (state, payload) => {
      state.usersList = payload.list
      state.totalList = payload.totalCount
    },
    changedepartmentList: (state, payload) => {
      state.departmentList = payload.list
    },
    changemenuList:(state, payload) => {
      state.menuList = payload.list
    },
    changeroleList: (state, payload) => {
      state.roleList = payload.list
    },


  },
  actions: {
    async getDataListAction({commit}, payload) {
      const pageName = payload.pageName
      const pagePath = `/${pageName}/list`

      const result  = await getDataLists(pagePath, payload.queryInfo)
      console.log(result);


      commit(`change${pageName}List`, result.data)
    }
  }

}


export default userMoudle