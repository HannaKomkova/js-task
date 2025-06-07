let str = prompt('enter string');

const CheckPalindrom = (str) =>{
    let reverseWord = str.split('').reverse().join('')
    if(str === reverseWord){
        console.log(`${str} - это слово палиндром`);
        
    } else {
        console.log(`${str} - это не слово палиндром`);
    }
}

CheckPalindrom(str)

