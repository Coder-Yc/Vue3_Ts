const rules = {
  name: [
    {
      required: true,
      message: "账号不能为空",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名至少包含五个字母或者数字",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密码必须是三位以上的字母或者数字",
      trigger: "blur",
    },
  ],
};
exports {rules};
