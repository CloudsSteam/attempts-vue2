export default function (fn, duration = 100) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
}
// 防抖计时
// 等待一段时间duration内，再次调用把之前计时器timer清空，重新设置计时
// 总之duration之后再去做具体的事情

// 个人理解 函数防抖就是法师发技能的时候要读条，技能读条没完再按技能就会重新读条。
// 函数节流就是fps游戏的射速，就算一直按着鼠标射击，也只会在规定射速内射出子弹。