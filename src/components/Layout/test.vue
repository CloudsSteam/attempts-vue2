<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <!-- <SiteAside /> -->
        <div class="left">左边区域，宽度固定，溢出隐藏</div>
      </template>
      <template>
        <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      </template>
      <template #right>
        <div class="right">右区域，宽度占固定</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
// import SiteAside from "../SiteAside";    //左边页面固定导致
export default {
  components: {
    Layout,
    // SiteAside
  },

}
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 900px;
  border: 1px solid;
  display: block;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.main {
  width: 100%;
  height: 100%;
  background: lightseagreen;
}
.right {
  width: 350px;
  height: 100%;
  background: lightblue;
}
</style>
