function changeStr(str){
 return str.split(' ')
 .map((el, i) => i % 2 ===0? el.toLowerCase(): el.toUpperCase())
 .join(' ')
}

console.log(changeStr('happy new year'));
 
const changeStr2 = (str) => { 
    return str.split(' ')
                .map((el, i) => i % 2 ===0? el.toLowerCase(): el.toUpperCase())
                .join(' ')
}


console.log(changeStr2('happy new year'));