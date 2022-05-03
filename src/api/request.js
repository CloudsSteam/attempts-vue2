import axios from "axios";
import showMessage from '../utils/showMessage';

const ins = axios.create(
  //   {
  //   baseURL:
  // }
);  //先创建一个axios实例可拦截再发出
ins.interceptors.response.use(function (resp) {
  //逻辑判断code为0，会将data中提前业务数据
  //code不为0，将msg提示显示到页面
  if (resp.data.code === 404) {
    showMessage({ content: resp.data.msg, type: "error", duration: 1500, });
    return null;
  }
  return resp.data.data;
}
);
// console.log("拦截器");

// console.log(resp.data.msg);


// return resp;



export default ins;


