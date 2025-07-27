// Создайте класс MaxFinder с методом findMax(arr), который возвращает наибольшее число в массиве.

class MaxFinder{
    arr = [];
    n = prompt('enter n');
    makeArray(){
        for (let i = 0; i < this.n; i++) {
            this.arr.push(prompt('enter number for array'))
        }
        return this.arr;
    }
    

    findMax(arr){
        this.makeArray();
        return arr.reduce((max, el) => {
            if(el > max){
                return max = el;
            } else {
                return max;
            }
        }, -Infinity);
    }
} 

const maxFinder = new MaxFinder();
console.log(maxFinder.findMax(maxFinder.arr));





  