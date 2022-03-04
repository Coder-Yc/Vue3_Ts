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
export function addUser(queryInfo: object) {
  return ycrequest.post<IdDataType>({
    url: '/users',
    data: queryInfo
  })
}