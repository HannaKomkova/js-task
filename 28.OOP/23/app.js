// Создайте класс DigitSummer с методом sumDigits(num), который возвращает сумму цифр числа.
// 123 -> 6
// 241 -> 7

class DigitSummer{
   num = prompt('enter number');
   sumDigits(num){
      return num.split('').reduce((acc, el) => {
         return acc += +el;
      }, 0)
   }
}

const digitSummer = new DigitSummer();

console.log(digitSummer.sumDigits(digitSummer.num));













