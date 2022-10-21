<template>
  <div @click="()=>''"
    class="t p-1 h-[10vw] w-[10vw] rounded-full flex flex-col ring justify-center items-center align-middle border-spacing-6 overflow-hidden"
    :class="{'bg-r0 ring-i0':mainStore.t==0,'bg-r1 ring-i1':mainStore.t==1,'bg-r2 ring-i2':mainStore.t==2,}">
    <slot />
  </div>
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
<style  scoped>

</style>