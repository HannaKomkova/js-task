// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие
// функции. Добавить проверки на ввод


class Calculator {
    summa(a, b){
        console.log(a+b);
        
    }

    res(a, b){
        console.log(a-b);
    }

    mult(a, b){
        console.log(a*b);
    }

    quotient(a, b){
        console.log(a/b);
    }

}

const calculator = new Calculator();

calculator.summa(4,2);
calculator.res(4,2);
calculator.mult(4,2);
calculator.quotient(4,2);








