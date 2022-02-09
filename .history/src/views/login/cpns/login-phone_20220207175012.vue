<template>
  <div class="login_phone">
    <el-form :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div>
          <el-button />
          <el-input v-model="phone.code"></el-input>
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

<style scoped></style>
