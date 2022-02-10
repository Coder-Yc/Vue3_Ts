import ycrequest from "../index";

interface Iaccounttype {
  name: string;
  password: string;
}

export function accountLogin(account: Iaccounttype) {
  return ycrequest.post({
    url: "/login",
    data: account,
  });
}
