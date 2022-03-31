<template>
  <div class="empty-container">
    <Icon type="empty" />
    <P>{{text}}</P>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  color: @warn;
}

.iconfont {
  font-size: 52px;
}
</style>