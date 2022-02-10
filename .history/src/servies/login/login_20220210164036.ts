import ycrequest from "../index";

interface Iaccounttype {
  name: string;
  password: string;
}

export function accountLogin(account: Iaccounttype) {
  ycrequest.post({
    url: "/users",
    data: account,
  });
}
