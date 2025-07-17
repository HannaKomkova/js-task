// Создай класс NumberChecker с методом is_even, который принимает число и возвращает True, если оно чётное. Вызови через объект.

class NumberChecker {

    isEven(a){
       a % 2 === 0? console.log(true) : console.log(false);
       ;
       
    }
}

const numberChecker = new NumberChecker();

numberChecker.isEven(4);
numberChecker.isEven(3);



