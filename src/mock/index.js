//不导入每次都会有500服务器响应失败
import "./banner";
import "./blog";
import "./setting";
import "./about";
import "./project";
import "./search";
import Mock from "mockjs";
Mock.setup({
  timeout: "500",
});