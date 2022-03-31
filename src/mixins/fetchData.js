//远程获取数据共用代码
//具体组件中，需要提供一个远程获取数据的方法 fetchData

export default function (defaultDataValue = null) { //不给传data就默认null
  return {
    data () {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created () {
      this.data = await this.fetchData(); //具体数据具体调用方法
      this.isLoading = false;
    }
  }

}
