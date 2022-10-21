<template>
  <div class="t inline-block h-full my-auto relative" :class="`${w}`">
    <div class="flex items-center justify-center align-middle my-auto h-full w-full absolute">
      <div class="m-auto"
        :class="`${mainStore.t==0?'bg-t0':mainStore.t==1?'bg-t1':'bg-t2'} ${w} ${isOdd ? h : 'h-full'}`" />
    </div>
  </div>
</template>
<script>
import { useMainStore } from '@/store/main'
export default {
  props: ["h", "w", "hm", "bg", "isOdd"],
  data() {
    return {
      mainStore: useMainStore(),
    }
  }
}
</script>