import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.PEBoPZDSiiHs0XpHlFWo_wHaEo?w=292&h=182&c=7&r=0&o=5&pid=1.7",
    siteTitle: "Cloudsteam",
    github: "https://github.com/CloudsSteam",
    qq: "行程卡出示",
    qqQrCode:
      "https://th.bing.com/th/id/OIP.Aeu1a79WrQazoBdLzAgMMwHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    weixin: "licensor993",
    weixinQrCode:
      "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203272119548.jpg",
    mail: "licensor993@gmail.com",
    icp: "赣BICP备17001719号",
    githubName: "狗窝",
    favicon: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203282036541.ico",
  },
});
