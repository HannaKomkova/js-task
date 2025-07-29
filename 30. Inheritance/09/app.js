// Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
// вызывает generateArray() и возвращает массив, где каждый элемент возведен в квадрат.
// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]


class DataGenerator {
    size = prompt('enter size');
    arr = [];

    generatArray() {
        for (let i = 0; i < this.size; i++) {
            this.arr.push(i);
            
        }

        return this.arr;
    }
   
}

class SquareArray extends DataGenerator{
    getSquareArray(){
        return this.generatArray().map((el) => el**2)
    }
}

const squareArray = new SquareArray();
console.log(squareArray.getSquareArray());
