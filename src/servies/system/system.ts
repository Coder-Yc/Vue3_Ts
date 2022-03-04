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


export function delData(url: string) {
  return ycrequest.delete<IdDataType>({
    url: url,
  })
}