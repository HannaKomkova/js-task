let n = +prompt('введите длинну');
let str = prompt('введите строку');

const hasLength= (strLength) => {
    return (promptStr) => {
        if(promptStr.length === strLength){
            console.log(`Строка ${promptStr} имеет длину строки  ${n}`);
            
        } else {
            console.log(`Строка ${promptStr} не имеет длину строки  ${n}`);
        }
    } 
}

hasLength(n)(str);







