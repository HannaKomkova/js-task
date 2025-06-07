let n = +prompt('введите число')

const makeFactorial = (number) => {
    let res = 1;
    for (let i = 1; i <= number; i++) {
       res *= i;
    }
    return res;
}

console.log(makeFactorial(n));



