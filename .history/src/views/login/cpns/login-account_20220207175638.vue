<template>
  <div class="login_account">
    <el-form :rules="rules" :model="account" label-width="50px">
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

export default defineComponent({
  setup() {
    const account = reactive({
      account: "",
      password: "",
    });

    return { account, rules };
  },
});
</script>

<style scoped>
.submit {
  display: contents;
}
</style>
