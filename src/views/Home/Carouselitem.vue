<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="carousel-img"
      :style="imagePosition"
      ref="image"
    >
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showWords"
      />

    </div>
    <div
      class="title"
      ref="title"
    >{{carousel.title}}</div>
    <div
      class="desc"
      ref="desc"
    >{{carousel.description}}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data () {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,  //外层容器尺寸
      innerSize: null,  //里层图片的尺寸
      mouseX: 0,
      mouseY: 0,
    }
  },
  computed: {
    //得到图片坐标

    imagePosition () {
      if (!this.containerSize || !this.innerSize) {
        return null;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;  //多出宽度高度
      const extraHeight = this.innerSize.height - this.containerSize.height;
      //x / mouseX=-extraWidth/container.width//关键比例
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        // left: left + "px",
        // top: top + "px",
        //改进：lefttop会引起重排改用transform
        transform: `translate(${left}px,${top}px)`
      }
    },
    //计算鼠标移入中间点
    center () {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }

  },
  mounted () {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
    //注册监听事件
    // this.monitoring()
  },
  // beforeUpdate () {
  //   this.setSize();
  // },
  destroyed () {
    window.removeEventListener("resize", this.setSize)
  },
  methods: {
    // monitoring () {
    //   this.$on('chlidMethod', (res) => {
    //     console.log(res)
    //   })
    // },

    showWords () { //显示文字滚动效果
      // console.log(111);

      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强行渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1.5s";
      this.$refs.title.style.width = this.titleWidth + "px"

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "3s 1s";
      this.$refs.desc.style.width = this.descWidth + "px"
    },

    //需求滑动后加载显示
    // scrool () {
    //   this.showWords();
    // },


    setSize () {//计算图片容器大小
      this.containerSize = {
        width: this.$refs.container.clientWidth ? this.$refs.container.clientWidth : "",
        height: this.$refs.container.clientHeight ? this.$refs.container.clientHeight : "",
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      // console.log(this.containerSize, this.innerSize);
    },
    handleMouseMove (e) {//计算鼠标相对位置
      // console.log(e.clientX, e.clientY); //鼠标位置
      const rect = this.$refs.container.getBoundingClientRect();  //矩形位置
      // console.log(rect);
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(this.mouseX, this.mouseY);
    },
    handleMouseLeave () {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }


  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  // background: @dark;
  width: 100%;
  height: 100%;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  // z-index: -1;
  position: absolute;
  transition: 0.2s;
  left: 0;
  top: 0;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  overflow: hidden;
  white-space: nowrap;
  left: 30px;
  color: #fff;
  //描边无效?
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
}
.title {
  top: calc(60% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(60% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>