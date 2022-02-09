<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登陆</router-link>
    <router-link to="/main">主页</router-link>
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
