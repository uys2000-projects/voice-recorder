<template>
  <div class="w-scree h-screen text-center">
    <start-button :active="active" :click="()=>active=!active" />
    <info-bar />
  </div>
</template>

<script>
import startButton from "@/components/startButton.vue"
import infoBar from "@/components/infoBar.vue";

export default {
  components: { startButton, infoBar },
  data() {
    return {
      active: false
    }
  },

}
</script>