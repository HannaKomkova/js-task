// Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
// Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
// Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]

class NumberGenerator{
   generateNumbers(size){
      let arr = [];
      for (let i = 0; i < size; i++) {
         arr.push(prompt('enter number'))
         
      } 

      return arr
   }
}

class EvenNumbers extends NumberGenerator{
   getEvenNumbers(size){

    return this.generateNumbers(size).filter((el) => el % 2 === 0)
   }
}

const evenNumbers = new EvenNumbers();
console.log(evenNumbers.getEvenNumbers(10));




