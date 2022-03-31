<template>
  <div>

    <Loading v-if="isLoading" />
    <button @click="isLoading=!isLoading"> 切换显示隐藏</button>
  </div>

</template>

<script>
import Loading from "./"
export default {
  data () {
    return {
      isLoading: true //父组件穿属性父组件需相对定位
    }
  },
  components: {
    Loading,
  }
}
</script>

<style>
</style>