<template>
  <div class="login_phone">
    <el-form>
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="phone.code"></el-input>
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
