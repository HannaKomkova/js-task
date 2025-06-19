let promptN = +prompt('enter number');
let str = '';

const showNumbers = (n) => {
    if (n > 10) return;
    str += n + ' '
    n++;
    showNumbers(n)
    
}

showNumbers(promptN);
console.log(str);




