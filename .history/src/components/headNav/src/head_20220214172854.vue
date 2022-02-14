<template>
  <div class="head">
    <i :class="isFodle ? el-icon-s-fold : "></i>
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

<style scoped></style>
