let num = prompt ('ведите число');

let array = num.split('');
let result = '';

for (let i = 0; i < array.length; i++) {

    result += array[i];
    if (i ===  (array.length - 1)) {
        break
    }
    if (!(array[i] % 2 === 0) && !(array[i+1] % 2 === 0)) {
        result +=  ':';
    } 
   
    
}

console.log(result); 