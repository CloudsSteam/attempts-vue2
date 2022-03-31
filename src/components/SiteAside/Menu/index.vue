<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon
  },
  data () {
    return {
      items: [
        {
          name: "/",    //路由重命名
          //:to="name:item.name"
          link: "/",
          title: "首页",
          icon: "home",
          exact: true
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          //startWith: true // 只要当前路径以link开头，当前菜单就是选中的
          exact: false
          //flase将匹配规则改为必须要精确匹配才能匹配类名
          //.router-link-active
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
          exact: true
        },
        {
          link: "/message",
          title: "任务板",
          icon: "chat",
          exact: true
        },
        {
          link: "/search",
          title: "Search",
          icon: "search",
          exact: true
        }
      ]
    };
  },
  // methods: {     //RouterLink会自动加样式 exact
  // :class="{绑定
  //       selected: isSelected(item),
  //     }"
  //
  //   isSelected (item) {
  //     var link = item.link.toLowerCase(); // 菜单的链接地址
  //     var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
  //     if (item.startWith) {
  //       return curPathname.startsWith(link);
  //     } else {
  //       return curPathname === link;
  //     }
  //   }
  // }
};
</script>

<style scoped lang="less" >
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 25px 0 35px 0;
  a {
    // &.selected {
    //   background: darken(@words, 3%);
    // }
    &.router-link-active {
      background: darken(@lightWords, 43%);
    }
    padding: 0 70px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 15px;
      .iconfont {
        font-size: 25px;
      }
      // .code {
      //   font-size: 30px;
      // }
    }
    &:hover {
      color: #fff;
    }
  }

  span {
    margin: 40px;
  }
}
</style>