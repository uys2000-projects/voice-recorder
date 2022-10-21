<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
    :class="{'fill-i0':mainStore.t==0,'fill-i1':mainStore.t==1,'fill-i2':mainStore.t==2,}">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
  <slot />
</template>
<script>
import { useMainStore } from '@/store/main'
export default {
  data() {
    return {
      mainStore: useMainStore()
    }
  }
}
</script>