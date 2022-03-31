import Mock from "mockjs";
Mock.mock("/api/search", "get", {
  code: 0,
  msg: "",
  data: "https://cn.bing.com/",// https://cn.bing.com/  https:www.strml.net/ http://skill.phodal.com/ https://www.typingclub.com/
  //
});