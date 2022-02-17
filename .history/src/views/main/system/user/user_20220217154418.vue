<template>
  <div class="user">
    <Ycform />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ycform from '@/baseUi/index'
import {IFormItem} from '@/baseUi/cpns/types'

export default defineComponent({
  name: 'user',
  components: {
    Ycform
  },
  setup() {
    const formItms: IFormItem[] {

    }
    return {}
  }
})
</script>

<style scoped></style>
