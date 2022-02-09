<template>
  <div class="login_account">
    <el-form>
      <el-form-item class="ElformItem">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Submit</el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.ElformItem {
  margin: 5px;
}
</style>
