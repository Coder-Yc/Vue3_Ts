<template>
  <div class="login_panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span> <i class="el-icon-user-solid"></i>账号登陆 </span>
        </template>
        <login-account />
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
        v-model="checked1"
        label="记住密码"
        size="large"
      ></el-checkbox>
      <el-link type="primary">注册</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import loginAccount from "./login-account.vue";
import loginPhone from "./login-phone.vue";

export default defineComponent({
  components: {
    loginAccount,
    loginPhone,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.login_panel {
  width: 320px;
}
.check {
  display: flex;
}
</style>
