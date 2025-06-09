let n = prompt('enter number');

const factorial = (num) => {
    let res =1;
    for (let i = 1; i <= num; i++) {
        res *=i;
    }
    return res;
};

printFactorial = (num) => console.log(factorial(num));

printFactorial(n);



