<template>
  <div @click="click"
    class="h-[50vw] w-[50vw] m-auto mt-10  flex flex-col justify-center items-center align-middle rounded-full ring border border-spacing-6"
    :class="{'bg-t4': active, 'ring-t2':active,'text-white':active,'bg-t2': !active,'ring-t4': !active,'text-black':!active,}">
    {{ active ? "Stop" : "Start" }}
  </div>
</template>
<script>
export default {
  props: ["active", "click"]
}
</script>