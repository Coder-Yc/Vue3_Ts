import ycrequest from "../index";

interface Iaccounttype {
  name: string;
  password: string;
}

interface IDatatypr {
  id: number,
  data: 
}

export function accountLogin(account: Iaccounttype) {
  return ycrequest.post({
    url: "/login",
    data: account,
  });
}
