<template>
  <div class="login_panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span> <i class="el-icon-user-solid"></i>账号登陆 </span>
        </template>
        账号登陆
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <i><iphone /></i>手机号登陆
          </span>
        </template>
        手机号登陆
      </el-tab-pane>
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

<style scoped>
.login_panel {
  width: 320px;
}
</style>
