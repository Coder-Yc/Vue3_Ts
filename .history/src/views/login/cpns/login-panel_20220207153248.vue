<template>
  <div class="login_panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="账号登陆">账号登陆</el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>Route
          </span>
        </template>
        账号登陆
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>Route
          </span>
        </template>
        手机号登陆
      </el-tab-pane>
      <el-tab-pane label="手机号登陆">手机号登陆</el-tab-pane>
    </el-tabs>
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

<style scoped></style>
