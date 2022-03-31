<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>
<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
  components: {
    SiteAside
  }
};
</script>

<style lang="less">
.test-container {
  width: 350px;
  height: 100%;
  border: 2px solid;
  margin: 0 auto;
}
</style>