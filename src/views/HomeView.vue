<template>
  <div class="w-scree h-screen text-center">
    <start-button :active="active" :click="()=>active=!active" />
  </div>
</template>

<script>
import startButton from "@/components/startButton.vue"
export default {
  components: { startButton },
  data() {
    return {
      active: false
    }
  }
}
</script>