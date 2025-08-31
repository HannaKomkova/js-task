// Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
// вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1

class Number{
   num;
   constructor(num){
      this.num = num;
   }
}

class SquareRootCalculator extends Number{
   constructor(num){
      super(num)
   }

   calculateSquareRoot(){
      for (let i = 0; i < this.num; i++) {
         if(i*i === this.num){
            return console.log(i);
            
            break
         }
      }
   }
}

const squareRootCalculator = new SquareRootCalculator(16);
squareRootCalculator.calculateSquareRoot();