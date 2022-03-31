<template>
  <div id="app">
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager
  },
  data () {
    return {
      current: 56,
      total: 3000
    };
  },
  methods: {
    handlePageChange (newPage) {
      //pageChange事件
      this.current = newPage;
      console.log("加载当前页数据", newPage);
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
.test-container {
  width: 300px;
  height: 200px;
  border: 2px solid #008c8c;
  margin: 0 auto;
  position: relative;
}
</style>
