const STORAGE_KEY = 'todos-vuejs'

export default {
  fetch () {
    return window.JSON.parse(
      //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
      window.localStorage.getItem(STORAGE_KEY) || {}
    )
  },

  save (items) {
    window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items))
    //JSON.stringify将一个 JavaScript 对象或值转换为 JSON 字符串
  },
}
