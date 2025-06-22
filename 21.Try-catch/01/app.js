let promptN = prompt('enter number');

const showResult = (n) => {
    try {
        if (!isNaN(n) && n % 2 === 0 ) {
            return n;
            
        } else {
            throw new Error('Вы ввели не число или оно является нечётным ');
            
        }
    } catch (error) {
        return error;
        
    }
}
let res = showResult(promptN);
console.log(res);




