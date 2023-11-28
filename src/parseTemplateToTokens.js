import Scanner from "./Scanner.js";
import nestTokens from './nestTokens.js'
export default function parseTemplateToTokens(templateStr) {
  const tokens = [];
  const scanner = new Scanner(templateStr);
  let words;
  while (scanner.pos < templateStr.length) {
    words = scanner.scanUtils("{{");
    scanner.scan("{{");
    if (words) tokens.push(["text", words]);
    // ↑括号左边处理
    // ↓括号右边处理
    words = scanner.scanUtils("}}");
    scanner.scan("}}");
    if(words[0] === '#'){
        tokens.push(["#", words.substring(1)]);
    }else if(words[0] === '/'){
        tokens.push(["/", words.substring(1)]);
    }else{
        tokens.push(["name", words]);
    }
  }
  return nestTokens(tokens)
}
