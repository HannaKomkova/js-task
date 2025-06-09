let n = +prompt('enter number');

const isEven = (num) => num % 2 === 0;

const printEvenCheck = (num) => console.log(`Число ${num} чётное? - ${isEven(num)}`);

printEvenCheck(n);







