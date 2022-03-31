<template>
  <ul class="right-list-container">
    <li
      v-for="(item,i) in list"
      :key="i"
    >
      <!-- vue静态模板，recta动态模板 -->
      <span
        @click="handleClick(item)"
        :class="{active:item.isSelect}"
      >
        {{item.name}}
      </span>

      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aside"
        :class="{ active: item.isSelect }"
      >
        {{ item.aside }}
      </span>

      <RightList
        :list="item.children"
        @select="handleClick"
      />
      <!-- 再次调用组件递归传入child -->
    </li>
  </ul>
</template>

<script>
//文章分类数据
export default {
  name: "RightList",//当组件名字缺失用name作为组件名，在组件内部进行自我递归
  props: {
    list: {
      // [{name:"xxx", isSelect：true children:[{name:"yyy", isSelect:false children}]}]
      type: Array,
      default: () => [],  //数组的默认值应该写出函数，函数返回结果才是默认值
    }
  },
  methods: {
    handleClick (item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    }
  }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }

  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
  .aside {
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
  }
}
</style>