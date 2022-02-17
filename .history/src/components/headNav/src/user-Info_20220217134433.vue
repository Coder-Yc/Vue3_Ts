<template>
  <div class="Dropdown">
    <el-dropdown>
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
      <span class="el-dropdown-link">
        {{ name }}
        <i class="el-icon-arrow-down">
          <arrow-down />
        </i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登陆</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const { name } = store.state.login.userInfo
    return { name }
  }
})
</script>

<style scoped></style>
