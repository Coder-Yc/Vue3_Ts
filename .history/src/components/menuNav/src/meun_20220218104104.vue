<template>
  <div class="meun">
    <div class="logo">
      <img class="img" src="../../../assets/imgs/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      :default-active="defaultActive"
      text-color="#fff"
      :collapse="collapse"
      class="el-menu"
    >
      <template v-for="item in value" :key="item.id">
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="children in item.children" :key="children.id">
              <el-menu-item
                :index="children.id + ''"
                @click="changeTemp(children)"
                route="clickRoute"
              >
                <i v-if="children.icon"></i>
                <span>{{ children.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
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
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { pathMapToMenu } from '@/utils/mapMenusToRouter'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const { value } = computed(() => {
      return store.state.login.userM
    })
    const changeTemp = (item: any) => {
      console.log(item.url)
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    const defaultActive = ref()
    const currentRoute = router.currentRoute
    const Menus = store.state.login.userM
    console.log(Menus)

    defaultActive.value = pathMapToMenu(currentRoute.value.path, Menus)
    console.log(defaultActive.value)

    return { value, changeTemp, defaultActive }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
}
.el-menu {
  border-right: none;
}
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
.el-submenu {
  background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}

::v-deep .el-submenu__title {
  background-color: #001529 !important;
}

// hover 高亮
.el-menu-item:hover {
  color: #fff !important; // 菜单
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
