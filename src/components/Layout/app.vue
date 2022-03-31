<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <Avatar
      url="https://tse4-mm.cn.bing.net/th/id/OIP-C.PEBoPZDSiiHs0XpHlFWo_wHaEo?w=292&h=182&c=7&r=0&o=5&pid=1.7"
      :size="200"
    />
    <Avatar url="1.7" />
    <HelloWorld msg="Welcome to My Vue.js App  " />

    <h1>App组件</h1>
    <MyButton />
    <Icon type="Topics" />
    <Icon type="Processinsg" />
    <Icon type="Conversion" />
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
    <div class="test-container">
      <Empty />
    </div>
    <div class="images-container">
      <ImageLoader
        src="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/3bf79/hero.png"
        placeholder="https://ethereum.org/static/5dea0acbc8484c42006d7bbed32fa019/7a6cf/doge-computer.png"
        :duration="1000"
        @load="handleLoaded"
      />
    </div>
    <div class="SiteAside-container">
      <SiteAside />
    </div>
    <div class="Inventory-container">
      <Inventory />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Avatar from "./components/Avatar.vue";
import MyButton from "./components/MyButton";
import Icon from "./components/Icon";
import Pager from "./components/Pager";
import Empty from "./components/Empty";
import ImageLoader from "./components/ImageLoader";
import SiteAside from "./components/SiteAside";
import Inventory from "./components/Inventory";
export default {
  name: "App",
  components: {
    HelloWorld,
    Avatar,
    MyButton,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    SiteAside,
    Inventory
  },
  data () {
    return {
      current: 2,
      total: 1502
    };
  },
  methods: {
    handlePageChange (newPage) {
      //pageChange事件
      this.current = newPage;
      console.log("加载当前页数据", newPage);
    },
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
/* .icon-chuli {
  color: red;
} */
.iconfont {
  font-size: 30px;
}
.test-container {
  width: 300px;
  height: 200px;
  border: 2px solid #008c8c;
  margin: 0 auto;
  position: relative;
}

.images-container {
  width: 500px;
  height: 200px;
  border: 2px solid;
  margin: 20px auto;
}

.SiteAside-container {
  width: 400px;
  height: 1000px;
  margin: 0 auto;
  text-align: center;
}

.Inventory-container {
  widows: 220px;
  margin: 0 auto;
  position: relative;
  text-align: left;
  /* input {
    
  } */
}

/* 怎么把body的滚动条搞出来 */
/* .content {
  font: 0px/0px sans-serif;
  clear: both;
  display: block;
} */
</style>
