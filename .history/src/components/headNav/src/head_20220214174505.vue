<template>
  <div class="head">
    <i
      :class="isFodle ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      class="fodleIcon"
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
  font-size: 30px;
  cursor: pointer;
}
</style>
