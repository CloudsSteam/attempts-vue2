// import Vuex from "vuex";树苗具名优化
import { Store, install } from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
import search from "./search";
import top from "./top";
// Vue.use(Vuex);
if (!window.Vuex) {//不存在cdn就默认
  install(Vue);
}

// export default new Vuex.Store({
export default new Store({
  modules: {
    banner,
    setting,
    about,
    project,
    search,
    top
  },
  strict: true,
});