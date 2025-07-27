//СКласс ArraySummer, в конструктор передаётся массив чисел. Сразу после создания объекта считается сумма и выводится.

class ArraySummer{
   arr = [];
    n = prompt('enter n');
    makeArray(){
        for (let i = 0; i < this.n; i++) {
            this.arr.push(prompt('enter number for array'))
        }
        return this.arr;
    }

    findSum(){
      this.makeArray();
      return this.arr.reduce((acc, el) => {
         return acc += +el;
      }, 0)
    }
}

const arraySummer = new ArraySummer();

console.log(arraySummer.findSum());





