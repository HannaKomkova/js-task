// Создайте класс FactorialCalculator с методом factorial(n), который возвращает факториал числа.

class FactorialCalculator{
    n = prompt('enter n');

    factorial(n){
        if(n <= 1) return n;
        return n * this.factorial(n-1);
    }
} 

const factorialCalculator = new FactorialCalculator();

console.log(factorialCalculator.factorial(factorialCalculator.n));


