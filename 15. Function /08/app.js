let array = ['hello', 'world', 'it`s', 'me'];

const checkArray = (arr) => {
    return arr.every((el) => isNaN(el))
}

if (checkArray(array)) {
    
    const sumStr = (arr) => { 
        let finalStr = '';
        arr.forEach((el)=> finalStr += el + ' ');
        return finalStr
    }
   
    console.log( sumStr(array));
    
} else {
    console.log(`в массиве не только строки`);
    
}




 
