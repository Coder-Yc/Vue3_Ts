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

<style scoped></style>
