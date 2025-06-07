const name1 = prompt('enter name'),
surname1 = prompt('enter surname');

function returnStr(name, surname){
    return `Привет, ${name} ${surname}`
}

console.log( returnStr(name1, surname1));
 

const returnStr1 = (name,surname) => {
    return `Привет, ${name} ${surname}`
} 

console.log( returnStr1(name1, surname1));