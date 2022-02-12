<template>
  <div class="meun">
    <div class="logo">
      <img class="img" src="../../../assets/imgs/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu>
      <template v-for="item in userMenus"> </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userstore } from "vuex";
export default defineComponent({
  setup() {
    const userMenus = computed(() => {});
    return { userMenus };
  },
});
</script>

<style scoped lang="less">
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
</style>
