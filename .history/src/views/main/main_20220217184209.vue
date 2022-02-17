<template>
  <div class="main">
    <el-container>
      <el-aside :width="iscollapse ? '60px' : '200px'">
        <meunNav :collapse="iscollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <headNav @foldchange="changefold" />
        </el-header>
        <el-main>
          <div class="pageInfo">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import meunNav from '../../components/menuNav/index'
import headNav from '../../components/headNav/index'
export default defineComponent({
  components: {
    meunNav,
    headNav
  },
  setup() {
    const iscollapse = ref()
    const changefold = (foldValue: boolean) => {
      iscollapse.value = foldValue
    }
    return { changefold, iscollapse }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}
.pageInfo {
  background-color: #fff;
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
