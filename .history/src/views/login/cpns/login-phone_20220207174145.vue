<template>
  <div class="login_phone">
    <el-form :rules="rules" :model="account">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const phone = {
      num: "",
      code: "",
    };
    return { phone };
  },
});
</script>

<style scoped></style>
