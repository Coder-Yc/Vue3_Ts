<template>
  <div class="login">
    <loginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import loginPanel from "./cpns/login-panel.vue";

export default defineComponent({
  components: {
    loginPanel,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // background: url("../../assets/images/bck.jpg");
}
</style>
