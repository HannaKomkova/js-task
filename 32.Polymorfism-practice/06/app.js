// Создай класс Sequence, метод get() → возвращает массив чисел сгенерированных prompt.
// Создай наследника OddIndexSum , метод sum(), который суммирует элементы на нечетных индексах.
// Ожидаемый результат: 7 + 5 = 12.

class Sequence{
   arr = [];
   get(){
      for (let i = 0; i < 5; i++) {
         this.arr.push(prompt('enter number'))
      }

      return this.arr;
   }
}

class OddIndexSum extends Sequence{
   sum(){
      this.arr = this.get();
      let sum = this.arr.reduce((acc, el, index) => {
         if(index % 2 !== 0){
            return acc+=+el;
         } else {
            return acc;
         }
      }, 0 )

      console.log(sum);
      
   }
}

const oddIndexSum = new OddIndexSum();
oddIndexSum.sum()