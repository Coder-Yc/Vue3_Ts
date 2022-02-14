<template>
  <div class="head">
    <i
      :class="isFodle ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fodleIcon"
      :size="20px"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isFodle = ref(true);
    return { isFodle };
  },
});
</script>

<style scoped>
.fodleIcon {
  size: 10px;
}
</style>
