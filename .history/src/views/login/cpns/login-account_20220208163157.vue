<template>
  <div class="login_account">
    <el-form :rules="rules" :model="account" label-width="60px" ref="loginRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import { ElForm } from "element-plus";

export default defineComponent({
  setup() {
    const account = reactive({
      account: "",
      password: "",
    });
    const loginRef = ref<InstanceType<typeof ElForm>>();

    const loginLog = (isKeepPassword: Boolean) => {
      loginRef.value?.validate((valid) => {
        if (valid) {
          console.log("真正的逻辑");
        }
      });
    };

    return { account, rules, loginLog, loginRef };
  },
});
</script>

<style scoped>
.submit {
  display: contents;
}
</style>
