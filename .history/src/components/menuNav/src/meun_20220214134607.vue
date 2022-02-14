<template>
  <div class="meun">
    <div class="logo">
      <img class="img" src="../../../assets/imgs/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu>
      <template v-for="item in value" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i class="el-icon-s-operation"></i>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="item.children"> </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2"> </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    const { value } = computed(() => {
      return store.state.login.userM;
    });
    console.log(value);

    return { value };
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
