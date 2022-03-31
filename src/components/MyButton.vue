<template>
  <div>
    <!-- <input type="number" placeholder="10" /> -->
    {{clock}}秒内
    <button @click="setClock">当前点击了{{count}}</button>
    <button @click="count=0">重置</button>
  </div>
</template>

<script>
export default {
  // name: "123",
  data() {
    return {
      count: 0,
      clock: 60
    };
  },
  props: {},
  methods: {
    setClock() {
      // if (this.time) {
      //   return;
      // }
      // ;
      this.clock = window.setInterval(() => {
        this.clock--;
      }, 1000);
    }
  }
};
</script>

<style>
input {
  width: 20px;
}
</style>
