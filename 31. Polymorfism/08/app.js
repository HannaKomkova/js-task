// Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]

class NumberArrayGenerator{
   array = [];
   generateArray(){
      for (let index = 1; index <= 8; index++){
         this.array.push(index);
     
      }
      return this.array;
   }

}

class EvenNumberFilter extends NumberArrayGenerator{
   generateArray(){
      this.array = super.generateArray()

     return this.array.filter((el) =>  el % 2 === 0)
   }
}

const evenNumberFilter = new EvenNumberFilter();
const res = evenNumberFilter.generateArray();
console.log(res);
