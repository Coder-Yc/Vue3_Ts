<template>
  <div class="head">
    <i
      :class="isFodleIcon ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fodleIcon"
      @click="clickFoldIcon"
    ></i>
    <div class="content">
      <Breadcrumb />
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-Info.vue'
import Breadcrumb from './Breadcrumb .vue'

export default defineComponent({
  components: {
    userInfo,
    Breadcrumb
  },
  setup(props, { emit }) {
    const isFodleIcon = ref()
    const clickFoldIcon = () => {
      isFodleIcon.value = !isFodleIcon.value
      emit('foldchange', isFodleIcon.value)
    }
    return { isFodleIcon, clickFoldIcon }
  }
})
</script>

<style scoped>
.head {
  display: flex;
  align-items: center;
  width: 100%;
}
.fodleIcon {
  font-size: 30px;
  margin-right: 30px;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
</style>
