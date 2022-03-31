<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  destroyed () {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  // background: lightblue;
}
</style>
