import ycrequest from "@/servies/index";

interface IdDataType {
  code: Number
  data: any
}

export function getDataLists(url: string, queryInfo: object) {
  return ycrequest.post<IdDataType>({
    url: url,
    data: queryInfo
  })
}

//删除用户
export function delData(url: string) {
  return ycrequest.delete<IdDataType>({
    url: url,
  })
}
//添加用户
export function addUser(url:string, queryInfo: object) {
  return ycrequest.post<IdDataType>({
    url: url,
    data: queryInfo
  })
}
//修改用户
export function dispatchUser(url:string, queryInfo: object) {
  return ycrequest.patch<IdDataType>({
    url: url,
    data: queryInfo
  })
}
//获取角色列表
export function getrolesList(url: string, queryInfo: object) {
  return ycrequest.post<IdDataType>({
    url: url,
    data: queryInfo
  })
}
//获取部门列表
export function getdepartmentList(url: string, queryInfo: object) {
  return ycrequest.post<IdDataType>({
    url: url,
    data: queryInfo
  })
}