<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";

export default {
  // created () {
  //   console.log(this.$route);
  // }
  components: {
    Layout,
    BlogList,
    BlogCategory,
  }
}
</script>
<style lang="less" scoped>
</style>