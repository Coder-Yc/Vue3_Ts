<template>
  <div class="head">
    <i
      :class="isFodleIcon ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fodleIcon"
      @click="clickFoldIcon"
    ></i>
    <div class="">
      <div>面包屑</div>
      <div>用户信息</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
.fodleIcon {
  font-size: 30px;
}
</style>
