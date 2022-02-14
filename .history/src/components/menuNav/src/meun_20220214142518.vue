<template>
  <div class="meun">
    <div class="logo">
      <img class="img" src="../../../assets/imgs/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in value" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="children in item.children" :key="children.id">
              <el-menu-item :index="children.id + ''"
                ><i v-if="children.icon" :class="children.icon"></i>
                <span>{{ children.name }}</span></el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
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
