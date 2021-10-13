<template>
  <div class="progress" style="height: 40px;">
    <div class="progress-bar bg-success" role="progressbar" :style="{width: `${progress}%`}"
         :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>