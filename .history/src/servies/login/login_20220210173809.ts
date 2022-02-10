import ycrequest from "../index";

interface Iaccounttype {
  name: string;
  password: string;
}

interface IDatatype {
  code: number;
  data: any;
}

export function accountLogin(account: Iaccounttype) {
  return ycrequest.post<IDatatype>({
    url: "/login",
    data: account,
  });
}
