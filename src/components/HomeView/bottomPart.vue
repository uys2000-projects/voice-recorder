<template>
  <div class="flex justify-around">
    <discard-button />
    <start-button />
    <save-button />
  </div>
</template>
<script>
import startButton from "@/components/HomeView/bottomPart/startButton.vue"
import discardButton from "@/components/HomeView/bottomPart/discardButton.vue"
import saveButton from "./bottomPart/saveButton.vue";
export default {
  components: { startButton, discardButton, saveButton },
}
</script>