<template>
  <div id="app">
    <div class="images-container">
      <ImageLoader
        src="https://ethereum.org/static/754d2f72ce2296fb59d9d974aeda16be/1e993/future_transparent.webp"
        placeholder="https://ethereum.org/static/5dea0acbc8484c42006d7bbed32fa019/de68a/doge-computer.webp"
        :duration="50"
        @load="handleLoaded"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  name: "App",
  components: {
    ImageLoader
  },
  data () {
    return {};
  },
  methods: {
    handleLoaded () {
      console.log("ImageLoader组件load事件触发，图片加载完成");
    }
  }
};
</script>

<style  >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0px;
  /* overflow: scroll; */
}

.images-container {
  width: 500px;
  height: 200px;
  border: 2px solid;
  margin: 20px auto;
}

/* 怎么把body的滚动条搞出来 */
/* .content {
  font: 0px/0px sans-serif;
  clear: both;
  display: block;
} */
</style>
