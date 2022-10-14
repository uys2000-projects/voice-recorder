<template>
  <div class="inline-block  h-5 w-[6vw]">
    <div class="t flex justify-between items-center h-5 w-[6vw]">
      <div class="bl bg-t3 w-[1vw]" :class="{'h-2':isEven | !isActive, 'h-5':isOdd}" />
      <div class="br bg-t3 w-[1vw]" :class="{'h-2':isOdd | !isActive, 'h-5':isEven}" />
      <div class="br bg-t3 w-[1vw]" :class="{'h-2':isEven | !isActive, 'h-5':isOdd}" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["time", "isActive", "reverse"],
  computed: {
    isEven: function () {
      return this.reverse ?? false ? ((this.time % 2) == 0) : ((this.time % 2) == 1) & this.isActive
    },
    isOdd: function () {
      return this.reverse ?? false ? ((this.time % 2) == 1) : ((this.time % 2) == 0) & this.isActive
    }
  }
}
</script>