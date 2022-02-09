<template>
  <div class="login_account">
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const account = reactive({
      account: "",
      password: "",
    });
    const rules = {
      name: [
        {
          required: true,
          message: "账号不能为空",
          trigger: blur,
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "用户名至少包含五个字母或者数字",
          trigger: blur,
        },
      ],
      password: [
        {
          required: true,
          message: "账号不能为空",
          trigger: blur,
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "用户名至少包含五个字母或者数字",
          trigger: blur,
        },
      ],
    };
    return { account };
  },
});
</script>

<style scoped>
.submit {
  display: contents;
}
</style>
