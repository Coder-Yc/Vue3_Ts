<template>
  <div class="login_panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span> <i class="el-icon-user-solid"></i>账号登陆 </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span> <i class="el-icon-mobile-phone"></i>手机号登陆 </span>
        </template>
        <loginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="check">
      <el-checkbox
        v-model="isKeepPassword"
        label="记住密码"
        size="large"
      ></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      type="primary"
      size="large"
      class="submit_button"
      @click="loginButton"
      >提交</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import loginAccount from "./login-account.vue";
import loginPhone from "./login-phone.vue";

export default defineComponent({
  components: {
    loginAccount,
    loginPhone,
  },
  setup() {
    const isKeepPassword = ref(false);
    const accountRef = ref();
    const loginButton = () => {
      console.log("点击了登陆按钮");
      accountRef.value.
    };

    return { isKeepPassword, loginButton, accountRef };
  },
});
</script>

<style scoped>
.login_panel {
  width: 320px;
}
.check {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.submit_button {
  width: 100%;
  margin-top: 10px;
}
</style>
