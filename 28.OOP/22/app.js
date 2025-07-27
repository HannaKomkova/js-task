// Создайте класс DuplicateRemover с методом removeDuplicates(arr), который убирает дубликаты. Использовать метод new Set()

class DuplicateRemover{

   arr = [];
   n = prompt('enter n');
    makeArray(){
        for (let i = 0; i < this.n; i++) {
            this.arr.push(prompt('enter number for array'))
        }
        return this.arr;
    }

    removeDuplicates(arr){
      this.makeArray();
      const newArray = [...new Set(arr)];
      return newArray;
    }

}

const duplicateRemover = new DuplicateRemover();

console.log(duplicateRemover.removeDuplicates(duplicateRemover.arr));


