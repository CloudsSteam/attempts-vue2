<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
  components: {
    Contact
  }
};
</script>

<style>
.test-container {
  width: 100%;
  height: 100%;
  border: 2px solid red;
  background: #000;
  /* margin: 0 auto; */
  /* text-align: center; */
  padding-top: 180px;
}
</style>