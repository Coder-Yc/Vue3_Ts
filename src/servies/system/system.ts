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