let promptNumber = prompt('enter numbers');
let count = 0;
let i = 0;
let arr = promptNumber.split('');

const findSum = () => {
    if (i === arr.length) return;
    count += +arr[i];
    i++;
    findSum()
}

findSum()
console.log(count);




// for (let i = 0; i < arr.length; i++) {
//    count += arr[i];
// }

// console.log(count);








