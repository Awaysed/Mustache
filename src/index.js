import parseTemplateToTokens from './parseTemplateToTokens.js'

window.SStemplate = {
  render(templateStr, deta) {
    //扫描器
    const tokens = parseTemplateToTokens(templateStr)
    console.log(tokens);
  }
}
