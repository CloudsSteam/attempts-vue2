<template>
  <div
    class="blog-list-container"
    v-loading="isLoading"
    ref="mainContainer"
  >
    <ul>
      <li
        v-for="item in data.rows"
        :key="item.id"
      >
        <div
          class="thumb"
          v-if="item.thumb"
        >
          <RouterLink :to="{
              name:'BlogDetail',
               params:'BlogDetail',
               params:{
                 id:item.id,
               },
              }">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
              name:'BlogDetail',
               params:'BlogDetail',
               params:{
                 id:item.id,
               },
              }">
            <h2>{{item.title}}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate ) }}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论: {{item.commentNumber}}</span>
            <RouterLink :to="{
                name:'CategoryBlog',
                params:{
                  categoryId:item.category.id,
                },
              }">
              {{item.category.name}}</RouterLink>
          </div>
          <div class="desc">
            {{item.description}}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length===0 && !isLoading" />
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>
<script>
import Pager from "@/components/Pager";
import setMainScroll from "@/mixins/setMainScroll.js"
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils"; // 模板用的是组件里面的东西
import Empty from "@/components/Empty";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), setMainScroll("mainContainer")],

  components: {
    Pager,
    Empty
  },
  computed: {
    //获取路由信息
    routeInfo () {
      // console.log(this.$route);
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId, page, limit
      };
    },
  },
  // mounted () {
  //   this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  //   this.$bus.$on("setMainScroll", this.handleSetMainScroll); //同理监听是否出现
  // },
  // beforeDestroyed () {//同理监听是否出现
  //   this.$bus.$emit("mainScroll");//??????????????????
  //   this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  //   this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  // },

  methods: {
    // handleScroll () {//同理监听是否出现
    //   this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    // },
    // handleSetMainScroll (scrollTop) {//同理监听是否出现
    //   this.$refs.mainContainer.scrollTop = scrollTop ? scrollTop : 0;
    // },

    formatDate,
    async fetchData () {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId,
        // console.log(this.$route, this.routeInfo)
      );
    },
    handlePageChange (newPage) {  //跳转事件，router.push改变导航的值
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /blog/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route () {
      this.isLoading = true;
      // 滚动高度为0
      this.$refs.mainContainer.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth; //平滑滚动
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>