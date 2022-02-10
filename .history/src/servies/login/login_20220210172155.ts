import ycrequest from "../index";

interface Iaccounttype {
  name: string;
  password: string;
}

interface IDatatype {
  id: number;
  data: any;
}

export function accountLogin<IDatatype>(account: Iaccounttype) {
  return ycrequest.post({
    url: "/login",
    data: account,
  });
}
