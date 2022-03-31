export default function (refValue, ) {
  return {
    mounted () {
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);//检测滚动添加mainScroll事件总线
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);//收到事件总线监听运行方法改变高度
    },
    beforeDestroyed () {

      this.$bus.$emit("mainScroll");//???dom消失改变触发mainScroll事件
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },

    methods: {
      handleMainScroll () {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);//事件总线检测到滚动一定距离使Top显现
      },
      handleSetMainScroll (scrollTop = 0) {//事件改变高度为0
        // console.log(scrollTop);
        // console.log(this.$refs[refValue].scrollTop);
        if (this.$refs[refValue]) {
          this.$refs[refValue].scrollTop = scrollTop;///问题所在
        }

        // ? scrollTop : 0
      },
    }
  }
}

//mixins监听滚动emit提交事件总线mainScroll以滚动,Top.vue$on收到滚动执行方法(判断是否滚动距离满足大于显示条件)
//Top.vue点击事件emit提交事件总线setMainScroll，mixins收到监听执行方法(改变高度)
//以及对应的销毁事件