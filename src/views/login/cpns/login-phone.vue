<template>
  <div class="login_phone">
    <el-form :model="phone" label-width="60px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get_code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const phone = reactive({
      num: "",
      code: "",
    });
    return { phone };
  },
});
</script>

<style>
.get_code {
  display: flex;
}
.get_code .code {
  margin-left: 5px;
}
</style>
