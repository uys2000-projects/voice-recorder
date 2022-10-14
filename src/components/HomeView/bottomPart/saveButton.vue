<template>
  <div @click="()=>''"
    class="t h-[15vw] w-[15vw] m-auto flex flex-col justify-center items-center align-middle rounded-full ring bg-t4 border-t4 ring-t2 border-spacing-6 overflow-hidden"
    :class="{'w-0':!isActive,'h-0':!isActive, 'opacity-0':!isActive}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-t2 w-1/2 h-1/2">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
    </svg>
  </div>
</template>
<script>
import { useRecordStore } from '@/store/record'
export default {
  data() {
    return {
      recordStore: useRecordStore(),
    }
  }, computed: {
    isActive: function () {
      return this.recordStore.record != null
    }
  }
}
</script>