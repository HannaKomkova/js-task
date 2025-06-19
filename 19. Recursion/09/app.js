let promptStr = prompt('enter string');
let res = true;
let i = 0;

const checkStr = (promptStr) => {
    if (res===false || i > promptStr.length / 2) return;
    let elem = promptStr[i]
    let finalElem = promptStr[promptStr.length-1-i]
    if(elem !== finalElem) {
        res = false;
    } 
    i++;
    checkStr(promptStr);
}

checkStr(promptStr)
console.log(res);



// for (let i = 0; i < promptStr.length / 2; i++) {
//     let elem = promptStr[i]
//     let finalElem = promptStr[promptStr.length-1-i]
//     if(elem !== finalElem) {
//         res = false;
//     } 
    
    
    
// }

// console.log(res);











