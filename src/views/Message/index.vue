<template>
  <div
    class="message-container"
    ref="container"
  >
    <div class="Inventory">
      <Inventory />
    </div>
    <div class="button">
      <button @click="handeClick">你点试试</button>
    </div>
  </div>

</template>

<script>
import { showMessage } from "@/utils"
import Inventory from "@/components/Inventory"
export default {
  components: {
    Inventory,
  },
  methods: {
    handeClick () {
      showMessage({
        content: "赶快尼玛一步一步完成任务",
        type: "error",
        duration: 1000,
        container: this.$refs.container,
        callback: function () {
          console.log("完成弹窗消息！！");        },
      });
    }
  }
}
</script>

<style lang="less" scoped>
.message-container {
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}
.Inventory {
  width: 100%;
  height: 100%;
}
.button {
  button {
    position: absolute;
    left: 1360px;
    // top: -847px;
    top: -910px;
    border: 0;
    background: none;
    text-transform: uppercase;
    color: #4361ee;
    // font-weight: bold;
    font-size: 30px;
    color: lightblue;
    position: relative;
    outline: none;
    padding: 16px 50px;
    box-sizing: border-box;
  }

  button::before,
  button::after {
    box-sizing: inherit;
    position: absolute;
    content: "";
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  button::after {
    bottom: 0;
    right: 0;
  }

  button::before {
    top: 0;
    left: 0;
  }

  button:hover::before,
  button:hover::after {
    width: 100%;
    height: 100%;
  }

  button:hover::before {
    border-top-color: red;
    border-right-color: red;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }

  button:hover::after {
    border-bottom-color: red;
    border-left-color: red;
    transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
      height 0.3s ease-out 1s;
  }
}
</style>