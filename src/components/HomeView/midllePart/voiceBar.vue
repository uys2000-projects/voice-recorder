<template>
  <div class="t inline-block h-full my-auto relative" :class="`${w}`">
    <div class="flex items-center justify-center align-middle my-auto h-full w-full absolute">
      <div class="m-auto" :class="`${bg} ${w} ${isOdd ? h : 'h-full'}`" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["h", "w", "hm", "bg", "isOdd"]
}
</script>