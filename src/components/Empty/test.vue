<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty
  }
};
</script>

<style scoped>
.test-container {
  width: 300px;
  height: 200px;
  border: 2px solid #008c8c;
  margin: 0 auto;
  position: relative;
}
</style>