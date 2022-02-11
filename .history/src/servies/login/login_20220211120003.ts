import ycrequest from "../index";

interface Iaccounttype {
  name: string;
  password: string;
}

interface IDatatype {
  id: number;
  data: any;
}

export function accountLogin(account: Iaccounttype) {
  return ycrequest.post<IDatatype>({
    url: "/login",
    data: account,
  });
}

export function accountInfo(id: number) {
  return ycrequest.get<IDatatype>({
    url: "/users/" + id,
  });
}

export function userMeuns(id: number) {
  return ycrequest.get({
    url: "role" + id + "menu",
  });
}
