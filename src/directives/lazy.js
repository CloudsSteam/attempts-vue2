import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage (img) {
  // 是否处理过
  // if (img.handled) {
  //   return;
  // }
  // console.log("已处理", img.src);

  img.dom.src = defaultGif; // 先暂时使用着默认图片
  //处理图片
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {    //关键判断因素
    // console.log(img.dom, rect, rect.top, -height, "在视口范围内");
    const tempImg = new Image();
    tempImg.onload = function () {
      // 当真实图片加载完成之后
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    // img.dom.src = img.src;//简写
    imgs = imgs.filter((i) => i !== img); //只要处理完就删掉不用考虑handles属性 i为整个对象不是只是dom对象(属性改变即改变)
  }
  else {
    // 不在视口范围内
    //  console.log(img.dom, rect, rect.top, -height, "不在视口范围内");
  }

  // img.handled = true;
}

//希望,调用该函数，就可以设置那些合适图片
function setImages () { //滚动条滚动
  // console.log("设置需要加载的图片");//触发太快防抖处理
  for (const img of imgs) {
    //处理图片
    setImage(img);
  }
}

function handleScroll () {
  setImages();
}

// setInterval(() => {
//   console.log(imgs);
// }, 2000)

eventBus.$on("mainScroll", debounce(handleScroll, 50));//事件总线监测滚动就会调用设置图片并防抖

export default {
  inserted (el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
      // handled: false //是否已经处理过
    };
    imgs.push(img);
    //立即处理它
    setImage(img);
  },
  unbind (el) {
    imgs = imgs.filter(img => img.dom !== el)
  }
};