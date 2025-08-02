// Создай класс NumberGen, метод get(n) → возвращает массив [1, 2, 3, 4, 5].
// Создай наследника SplitEvenOdd, метод getData(n) возвращает массив из двух списков: четные и нечетные.
// Пример: '[2, 4] [1, 3, 5]'


class NumberGen{
    get(){
        return [1, 2, 3, 4, 5];
    }
}

class SplitEvenOdd extends NumberGen{
    getData(){
        let arr = this.get();
        let arrayEven = [];
        let arrayUneven = [];
        arr.forEach((el) => {
            if(el % 2 ===0){
                arrayEven.push(el);
            } else {
                arrayUneven.push(el);
            }
        })

         console.log(arrayEven, arrayUneven);
        
    }
}

const splitEvenOdd = new SplitEvenOdd();
splitEvenOdd.getData()