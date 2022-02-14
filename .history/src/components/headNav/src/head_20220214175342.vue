<template>
  <div class="head">
    <i
      :class="isFodle ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fodleIcon"
      @click="clickFoldIcon"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isFodle = ref(true);
    const clickFoldIcon = () => {
      console.log("123");
    };
    return { isFodle, clickFoldIcon };
  },
});
</script>

<style scoped>
.fodleIcon {
  font-size: 30px;
}
</style>
