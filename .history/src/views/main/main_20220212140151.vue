<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
.main .el-header,
.main .el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.main .el-footer {
  line-height: 60px;
}

.main .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.main .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

.main > .el-container {
  margin-bottom: 40px;
}

.main .el-container:nth-child(5) .el-aside,
.main .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.main .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
