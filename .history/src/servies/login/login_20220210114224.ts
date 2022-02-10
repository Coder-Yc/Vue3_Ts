import YcRequest from "../request";

interface Iaccounttype {
  name: string;
  password: string;
}

export function accountLogin(account: Iaccounttype) {
  YcRequest.request({
    url: "/login",
  });
}
