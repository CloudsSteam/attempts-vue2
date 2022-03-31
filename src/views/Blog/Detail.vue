<template>
  <Layout>
    <div
      ref="mainContainer"
      class="main-container"
      v-loading="isLoading"
    >
      <BlogDetail
        :blog="data"
        v-if="data"
      />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div
        class="right-container"
        v-loading="isLoading"
      >
        <BlogTOC
          :toc="data.toc"
          v-if="data"
        />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import setMainScroll from "@/mixins/setMainScroll.js"
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import { titleController } from "@/utils";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null), setMainScroll("mainContainer")],
  methods: {
    async fetchData () {
      let resp = await getBlog(this.$route.params.id);
      // resp = null;
      if (!resp) {
        //文章不存在
        this.$router.push("/404");//{ name: "NotFound" }
        return;
      }
      titleController.setRouteTitle(resp.title);
      return resp;
    },
    // handleScroll () {
    //   // console.log("gun");
    //   this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    // },
    // handleSetMainScroll (scrollTop) {
    //   this.$refs.mainContainer.scrollTop = scrollTop ? scrollTop : 0;
    // }
  },
  // mounted () {
  //   this.$bus.$on("setMainScroll", this.handleSetMainScroll);//收到事件总线监听运行方法改变高度

  //   this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);//滚动处理方法添加mainScroll事件总线
  // },
  // beforeDestroyed () {
  //   this.$bus.$emit("mainScroll");//???dom消失改变触发mainScroll事件
  //   this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);

  //   this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  // },
  updated () {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>