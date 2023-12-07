
import lookUp from './lookUp'
import renderTemplate from './renderTemplate'
// token

export  default function(token,data){
    console.log('parseArray',token[1],data);
    const v = lookUp(data,token[1])
    // console.log(1111,v);
    let resuleStr = ''
    v.forEach(item => {
        resuleStr += renderTemplate(token[2],{
            ...item,
            '.':item
        })
    });
    return resuleStr
}

