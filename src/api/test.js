import axios from "axios";

async function getNews () {
  const resp = await axios.get(
    "http://localhost:8080/api/v4/videos/1484885874358280192" //开发服务器位置和端口号可省略不用写死
  );  //浏览器请求这个地址
  //到开发服务器vue.config.js匹配规则路径以api开头转发到对应https://lens.zhihu.com
  //则开发服务器去请求https://lens.zhihu.com/api/v4/videos/1484885874358280192数据给浏览器
  console.log(resp);
}
getNews();