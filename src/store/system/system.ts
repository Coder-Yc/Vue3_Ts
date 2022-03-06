import { getDataLists, delData, addUser, dispatchUser } from "@/servies/system/system";
import { IRootState } from "@/store";
import {Module} from 'vuex'


interface IuserData {
  usersList: any
  departmentList: any
  usersListTotal: Number
  roleList:any
  menuList: any
  goodsList: any
}
const userMoudle:Module <IuserData, IRootState>  = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      departmentList: [],
      menuList: [],
      roleList: [],
      goodsList: [],
      usersListTotal: 0
    }
  },
  getters: {
    pageDataList(state) {
      return (pageName: string) => {
       return (state as any)[`${pageName}List`]
      }
    },
    pageDataTotal(state) {
      return (pageName: string) => {
       return (state as any)[`${pageName}ListTotal`]
      }
    }
  },
  mutations: {
    changeusersList : (state, payload) => {
      state.usersList = payload.list
      state.usersListTotal = payload.totalCount
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
    changegoodsList:(state, payload) => {
      state.goodsList = payload.list
    },

  },
  actions: {
    //得到用户列表
    async getDataListAction({commit}, payload) {
      const pageName = payload.pageName
      const pagePath = `/${pageName}/list`
      const result  = await getDataLists(pagePath, payload.queryInfo)
      // console.log(result.data);
      commit(`change${pageName}List`, result.data)
    },
    //删除用户
    async delButtonAction({commit}, payload) {
      const {id, pageName} = payload
      const url = `/${pageName}/${id}`
      await delData(url)
      this.dispatch('system/getDataListAction', {
          pageName: 'users',
          offset: 0,
          size: 10,
      })
    },
    //添加用户
    async addButtonAction({commit}, payload) {
      const url = 'users'
      const result = await addUser(url, payload.value)
      if (result.code === 0) {
        this.dispatch('system/getDataListAction', {
          pageName: 'users',
          offset: 0,
          size: 10,
        })
      }
    },
    //修改用户
    async changeButtonAction({commit}, payload) {
      const pageName = 'users'
      const url = `/${pageName}/${payload.value.id}`
      const result = await dispatchUser(url, {
        "cellphone": payload.value.cellphone,
      })
      if (result.code === 0) {
      this.dispatch('system/getDataListAction', {
        pageName: 'users',
        offset: 0,
        size: 10,
      })
      }


    }
  }

}


export default userMoudle