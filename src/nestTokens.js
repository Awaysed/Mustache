export default function (tokens) {
  // 结果数组
  let nestTokens = [];
  let tempTokens = nestTokens;
  let sections = []; // 栈
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    switch (token[0]) {
        case "#":
            tempTokens.push(token)
            sections.push(token) // 入栈
            tempTokens = token[2] = []
            break;
        case "/":
            sections.pop() // 出栈
            tempTokens = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens
            break;
        default:
            tempTokens.push(token)
            break;
    }
  }
  return nestTokens
}
