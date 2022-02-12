<template>
  <div class="meun">
    <div>
      <img class="img" src="../../../assets/imgs/logo.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
<span v-if="!collapse" class="title">Vue3+TS</span>
</style>
