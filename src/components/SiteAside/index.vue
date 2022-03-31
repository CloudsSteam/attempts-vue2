<template>
  <div
    v-if="data"
    class="site-aside-container"
  >
    <template>
      <div class="avatarcontainer">
        <Avatar
          :url="data.avatar"
          :size="200"
        />
      </div>
      <h1 class="title">{{data.siteTitle}}</h1>
    </template>

    <Menu />
    <Contact />
    <p class="footer">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact
  },
  computed: mapState("setting", ["data"]),  //玩累了，前面还是加匿名吧可能是namespaced
};
</script>

<style scoped lang="less" >
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: lighten(@dark, 8%);
  padding: 20px 0 15px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatarcontainer {
  text-align: center;
  padding: 25px 0 25px 0;
}
.footer {
  margin-top: 35px;
  text-align: center;
  font-size: 12px;
  color: lighten(@lightWords, 8%);
}
.title {
  font-size: 1.5em;
  color: #fff;
  text-align: center;
}
</style>