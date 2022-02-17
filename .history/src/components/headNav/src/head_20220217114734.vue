<template>
  <div class="head">
    <i
      :class="isFodleIcon ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fodleIcon"
      @click="clickFoldIcon"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <userInfo></userInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-Info.vue'

export default defineComponent({
  components: {
    userInfo
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
  /* margin-right: 20px;
   */
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
