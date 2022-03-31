<template>
  <div
    v-loading="loading"
    class="home-contain"
    ref="container"
    @wheel="handleWheel"
  >

    <!-- <h1>{{banners.length}}
    </h1> -->
    <!-- <button @click="handeClick">瞅瞅</button> -->
    <ul
      class="carousel-container"
      :style="{marginTop}"
      @transitionend="handleTransitionEnd"
    >
      <li
        v-for="item in data"
        :key="item.id"
      >
        <CarouselItem :carousel="item" />
        <!-- ref="child" -->

        <!-- <img :src="item.midImg" />
        <img :src="item.bigImg" />
        <h2>{{item.title}}</h2>
        <h3>{{item.description}}</h3> -->
      </li>
    </ul>

    <div
      @click="switchTo(index-1)"
      v-show="index >= 1"
      class="icon icon-up"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      @click="switchTo(index+1)"
      v-show="index < data.length-1"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        @click="switchTo(i)"
        :class="{active:i===index}"
        v-for="(item,i) in data"
        :key="item.id"
      ></li>
    </ul>

    <!-- <p
      class="title"
      ref="title"
    >{{data[index]?data[index].title: ''}}</p>

    <p
      class="desc"
      ref="desc"
    >{{data[index]?data[index].description: ''}}</p> -->
    <!-- :style="style" -->
  </div>

</template>

<script>
// import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
// import fetchData from "@/mixins/fetchData.js";
import { mapState } from "vuex";
// getBanners().then((r) => {
//   console.log(r);
// });

export default {
  //  混入获取数据公共代码
  // mixins: [fetchData([])],  //methods中写入提供对应fetchdatch函数

  components: {
    CarouselItem,
    Icon,
  },

  data () {
    return {
      style: {
        width: '800px',
      },
      datatitle: '',
      index: 0,//显示的是第几张轮播图
      containerHeight: 0,  //容器默认高度 
      switching: false,  //鼠标是否滚动
      // isLoading: true,  //是否获取数据完成取消加载svg
      // banners: [],
      // titleWidth: 0,
      // descWidth: 0,
    };
  },

  // async created () {//提取至公共数据
  //   this.banners = await getBanners();
  //   this.isLoading = false; //异步加载不能直接isLoading=" "
  // },
  //  2 created () {
  //   getBanners().then((r) => {
  //     this.banners = r;
  //   });
  // },
  // async data () {
  //   return {
  //     banners: await getBanners(),
  //   }
  // }


  // watch: {   // 动态监听index变化再次调用子组件方法加载
  //   index: {   //
  //     handler (newval, oldval) {
  //       if (newval) {
  //         this.showWords();
  //       }
  //       // const index1 = this.index + 1;
  //       // console.log(this.$refs.child);
  //       // setTimeout(() => { //子组件还没加载出来，延时调用
  //       //   this.$refs.child.methods.showWords();
  //       // }, 100);
  //       //还是报错"TypeError: Cannot read properties of undefined (reading showWords)
  //     },
  //     immediate: true,  //是否开始时候监听
  //     deep: true
  // }


  //  this.marginTop: {   //
  //   handler (newval, oldval) {
  //     if (newval) {
  //       this.showWords();
  //     }
  //   },
  //   immediate: true,  //是否开始时候监听
  //   deep: true
  // }

  // },
  created () {

    this.$store.dispatch("banner/fetchBanner");
  },
  mounted () {
    this.containerHeight = this.$refs.container.clientHeight;
    // console.log(mixins());

    // console.log(this.data);

    window.addEventListener("resize", this.handleResize);

  },

  updated () {

    // console.log(this.titleWidth, this.descWidth)
  },


  destroyed () {
    window.removeEventListener("resize", this.handleResize)
  },

  computed: {
    ...mapState("banner", ['data', 'loading']),//不知为啥...mapState(['data', 'loading'])不行

    marginTop () {
      // console.log(this.containerHeight);
      return -this.index * this.containerHeight + "px"
    },
  },

  methods: {
    // handeClick () {
    //   this.$showMessage({
    //     content: "来了老弟！",
    //     type: "success",
    //     duration: 1000,
    //     container: this.$refs.container,
    //     callback: function () {
    //       console.log("完成" + qw + "弹窗消息！！");        },
    //   });
    // }
    //提供fecthdata函数调用远程数据

    // async fetchData () {
    //   return await getBanners();
    // },



    // },

    // showWords () { //显示文字滚动效果
    //   // console.log(this.mixins);

    //   // let title = this.mixins[this.index] ? this.mixins[this.index].title : ''
    //   // let timer = ''
    //   // let i = 0
    //   // timer = setInterval(() => {
    //   //   i++;
    //   //   this.datatitle += title[i]
    //   //   if (i >= title.length) {
    //   //     clearInterval(timer)
    //   //   }
    //   // }, 1000);
    //   // console.log(this.$refs.title.clientWidth);

    //   // this.style.width = this.$refs.title.clientWidth + 'px';
    //   this.titleWidth = this.$refs.title.clientWidth;
    //   this.descWidth = this.$refs.desc.clientWidth;

    //   this.$refs.title.style.opacity = 1;
    //   this.$refs.title.style.width = 0;

    //   // console.log(this.titleWidth, this.$refs.title.style.width);
    //   //强行渲染
    //   this.$refs.title.clientWidth;
    //   this.$refs.title.style.transition = "1.5s";
    //   console.log(this.descWidth);

    //   this.$refs.title.style.width = this.titleWidth + "px";
    //   // console.log(this.descWidth);

    //   this.$refs.desc.style.opacity = 1;
    //   this.$refs.desc.style.width = 0;
    //   this.$refs.desc.clientWidth;
    //   this.$refs.desc.style.transition = "3s 1s";
    //   this.$refs.desc.style.width = this.descWidth + "px"
    // },

    //切换轮播图
    switchTo (i) {
      this.index = i;

      // window.addEventListener
      // console.log(this.index)
    }
    ,
    handleWheel (e) {
      if (this.switching) {
        return;
      }

      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;

        // this.$refs.child.showWords;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd () {
      this.switching = false;
    },

    handleResize () {
      // console.log("视口变化");
      this.containerHeight = this.$refs.container.clientHeight;
    }

  },


}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-contain {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  //测试
  // margin: 100px auto;
  // overflow: visible;
  // border: 2px solid #008c8c;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  transform: translateX(-50%);
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 8px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.iconfont {
  font-size: 30px;
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 25px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    &.active {
      background: #fff;
    }
  }
}

// .title,
// .desc {
//   position: absolute;
//   letter-spacing: 3px;
//   overflow: hidden;
//   white-space: nowrap;
//   display: inline-block;
//   left: 30px;
//   color: #fff;
//   z-index: 20;
//   // height: 20px;
//   //描边无效?
//   text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
//     0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
//   opacity: 0;
// }
// .title {
//   top: calc(60% - 40px);
//   font-size: 2em;
//   // transition: 1.5s;
// }
// .desc {
//   top: calc(60% + 20px);
//   font-size: 1.2em;
//   color: lighten(@gray, 20%);
//   // transition: 3s 1s;
// }
</style>