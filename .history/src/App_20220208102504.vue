<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: {},
});
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
