let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let arr = ["a","b","d","f"];


const findSymbol = () => {
    try {
        if(arr.length === 0) throw new Error('массив пуст');
        let firstIndex = alphabet.indexOf(arr[0]);
        let lastIndex = alphabet.indexOf(arr[arr.length-1]);
        let newStr = alphabet.slice(firstIndex, lastIndex+1);
        let resStr = '';
        for (let i = 0; i < newStr.length; i++) {
            if(!arr.includes(newStr[i])) {
                resStr += newStr[i] + ' ';
            }
            
        }
        return resStr;
    } catch (error) {
        console.log(error);
        
    }
   
}

let res = findSymbol()
console.log(res);






