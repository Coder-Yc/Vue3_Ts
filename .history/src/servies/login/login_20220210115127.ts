import YcRequest from "../request/index";

interface Iaccounttype {
  name: string;
  password: string;
}

export function accountLogin(account: Iaccounttype) {
  YcRequest.post({
    url: "login",
    data: account,
  });
}
