<template>
  <div class="login_account">
    <el-form :rules="rules" :model="account" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/account-config";
import Elinput from "element-plus";

export default defineComponent({
  setup() {
    const account = reactive({
      account: "",
      password: "",
    });

    const loginLog = () => {
      console.log("登陆逻辑");
    };

    return { account, rules, loginLog };
  },
});
</script>

<style scoped>
.submit {
  display: contents;
}
</style>
