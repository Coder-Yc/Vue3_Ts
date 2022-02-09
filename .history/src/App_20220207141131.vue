<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
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

<style lang="less"></style>
