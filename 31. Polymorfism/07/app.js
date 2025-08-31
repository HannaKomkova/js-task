//Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
// Результат: 5

class NumberGenerator{
   generateNumber(){
      return 64;
   }
}

class SquareRootCalculator extends NumberGenerator{
   generateNumber(){
      let random = super.generateNumber()
      for (let i = 0; i <= random; i++) {
         if(i*i === random){
            return i;
            
            break
         }
      }
   }
}

const squareRootCalculator = new SquareRootCalculator()
let res = squareRootCalculator.generateNumber()
console.log(res);

