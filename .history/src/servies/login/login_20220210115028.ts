import YcRequest from "../request";

interface Iaccounttype {
  name: string;
  password: string;
}

export function accountLogin(account: Iaccounttype) {
  return YcRequest.post({
    url: "login",
    data: account,
  });
}
