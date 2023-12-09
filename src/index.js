import parseTemplateToTokens from "./parseTemplateToTokens.js";
import renderTemplate from "./renderTemplate.js";
window.SStemplate = {
  render(templateStr, deta) {
    //扫描器
    const tokens = parseTemplateToTokens(templateStr);
    // console.log(tokens);
    const result = renderTemplate(tokens, deta);
    console.log("结果", result);
    return result
  },
};
