let promptStr = prompt('enter string');

const checkString = (str) => {
    if(/[0-9]+/.test(str)){
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}

checkString(promptStr);



