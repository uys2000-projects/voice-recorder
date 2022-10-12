<template>
  <div @click="click"
    class="h-[50vw] w-[50vw] m-auto mt-10  flex flex-col justify-center items-center align-middle rounded-full ring border border-spacing-6 overflow-hidden"
    :class="{'bg-t4': active, 'ring-t2':active,'text-white':active,'bg-t2': !active,'ring-t4': !active,'text-black':!active}">
    <div :class="{play:active, stop:!active}" />
  </div>
</template>
<script>
export default {
  props: ["active", "click"],
}
</script>
<style scoped>
.stop {
  transition: 1s;
  border-radius: 5px;
  box-sizing: border-box;
  margin-left: 30vw;
  width: 60vw;
  height: 30vw;
  border-width: 15vw 30vw 15vw 30vw;
  border-color: transparent transparent transparent #202020;
}
.play {
  transition: 1s;
  border-radius: 5px;
  box-sizing: border-box;
  width: 30vw;
  height: 30vw;
  border-width: 0px 0px 0px 30vw;
  border-color: transparent transparent transparent #202020;
}
</style>