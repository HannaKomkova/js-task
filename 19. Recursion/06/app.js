let promtN = +prompt('enter number');

const countFactorial = (n) => {
   if (n === 1) return n;
   
   return n * countFactorial(n-1);
}

const res = countFactorial(promtN);
console.log(res);









