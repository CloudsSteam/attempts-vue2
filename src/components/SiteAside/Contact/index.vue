<template>
  <ul class="contact-container">
    <li>
      <a
        target="_blank"
        :href="data.github"
      >
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=2477869165&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="jiankangma" />
        </div>
        <span>{{data.qq}}</span>
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"
          alt
        />
      </div>
    </li>
    <li>
      <a href="mailto:licensor993@gmail.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{data.mail}}</span>
      </a>
    </li>

    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from 'vuex';
export default {
  components: {
    Icon
  },
  computed: mapState("setting", ["data"])
};
</script>

<style scoped  lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  // padding: 20 0;
  padding-left: 78px;
  // padding-top: 8px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    // width: 200px;
    line-height: 25px;
    // display: inline;
    margin: 20px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .iconfont {
    font-size: 25px;
  }
  // .weixin .iconfont {
  //   font-size: 30px;
  //   text-indent: -3px;
  // }
  .icon {
    width: 45px;
  }

  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 15px;
    // padding-left: 110px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>