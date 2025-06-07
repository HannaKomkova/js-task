function changeStr(str){
    return str.split(' ')
    .map(function ( el){
        return el[0].toUpperCase() + el.slice(1)
    })
    .join(' ')
}

console.log(changeStr('hschool company'));
  
const changeStr2 = (str) => {
    return str.split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ')
}

console.log(changeStr2('hschool company'));
