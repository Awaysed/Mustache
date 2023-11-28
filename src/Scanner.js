export default class {
  constructor(templateStr) {
    // console.log("Scanner方法", templateStr);
    this.templateStr = templateStr
    this.pos = 0;
    this.tails  = templateStr
  }
  // 路过
  scan(tag) {
    if(this.tails.indexOf(tag) == 0){
        this.pos += tag.length
        this.tails = this.templateStr.substr(this.pos)
    }
    // console.log('scan指针',this.pos);
  }
  // 返回路过的内容
  scanUtils(stopTag) {
    let post_backup = this.pos
    while(this.tails.indexOf(stopTag) != 0 && this. eos()){
        this.pos++
        this.tails = this.templateStr.substr(this.pos)
    }
    // console.log('scanUtils指针',this.pos);
    return this.templateStr.substring(post_backup,this.pos)
  }
  eos(){
    return this.pos < this.templateStr.length
  }
}
