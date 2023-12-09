export default function lookUp (data,key){
   // 该函数时取对象类似于'a.b.c'的属性
    if(key.indexOf('.') == -1 || key === '.') return data[key]

    const keyArray = key.split('.')
    let tempObj = data
    keyArray.forEach(item => {
        tempObj = tempObj[item]
    });
    return tempObj
}
const obj = {
    a:{
        b:{
            c:'到底了'
        }
    }
}
console.log(lookUp(obj,'a.b.c'));
