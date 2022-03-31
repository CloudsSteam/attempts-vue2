import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 1,
  msg: "我不知道发生了什么",
  data: [
    {
      id: "1",
      midImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101422141.jpg",
      bigImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101422803.jpg",
      title: "霖东将至",
      description: "人为有恐剧的时候方能勇敢",
    },

    {
      id: "2",
      midImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101422670.jpg",
      bigImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101431528.jpg",
      title: "血火同源",
      description: "如果我回头,一切都完了",
    },
    {
      id: "3",
      midImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101423279.jfif",
      bigImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101431614.jpg",
      title: "听我怒吼",
      description: "风雨不动安如山,不动声色懂不懂",
    },
    {
      id: "4",
      midImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101430871.jpg",
      bigImg: "https://cdn.jsdelivr.net/gh/CloudsSteam/PicGo//img/202203101422229.jpg",
      title: "虽远必诛",
      description: "沙特和阿联酋拒接拜登电话",
    },
  ],
});