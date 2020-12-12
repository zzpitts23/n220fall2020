<template>
  <vue-splash
    :show="show"
    logo="/images/splash.png"
    title="By: Zach Pitts"
    color="#d9301d"
    :size="400"
    :fixed="true"
  />
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = false
    }, 2000)
  },
}
</script>

<style>
.vue-splash {
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #d6311f, #0e1011);
  z-index: 100;
}
</style>
