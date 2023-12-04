import lookUp from "./lookUp";
import parseArray from './parseArray'
export default function renderTemplate(tokens, data) {
  const resultStr = "";
  //   console.log('323',data);
  const result = tokens.reduce((upper, item) => {
    if (item[0] === "text") {
      upper += item[1];
    } else if (item[0] === "name") {
      // 将对象嵌套属性取出
      upper += lookUp(data, item[1]);
    }else if(item[0] === "#"){
      upper += parseArray(item,data)
    }
    return upper;
  }, resultStr);

  console.log("hahhah", result);
}
