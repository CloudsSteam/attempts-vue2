<template>
  <div class="image-loader-conainer">
    <img
      v-if="!everythingDone"
      :src="placeholder"
      alt
      class="placeholder"
    />
    <img
      @load="handleLoad"
      :src="src"
      alt
      class="origin"
      :style="{opacity:originOpacity}"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    placeholder: { type: String, required: true },
    duration: { type: Number, default: 500 }
  },
  data () {
    return {
      originLoaded: false, //原图是否加载完成
      everythingDone: false //一切是否尘埃落定
    };
  },
  computed: {
    originOpacity () {
      return this.originLoaded ? 1 : 0;
    }
  },
  methods: {
    handleLoad () {
      setTimeout(() => {
        //
        this.originLoaded = true;
        setTimeout(() => {
          this.everythingDone = true;
          this.$emit("load");
        }, this.duration);
        // console.log("原图加载完成");
        //
      }, 2000);
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-conainer {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    object-fit: contain;
    filter: blur(1px); //背景虚化
  }
}
</style>