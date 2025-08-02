// Создай класс IntGenerator, метод getNums() возвращает [-3, 1, 4, -1].
// Создай наследника PositiveSum и метод метод getNums(), который находит сумму положительных.
// Ожидаемый результат: 5.

class IntGenerator{
    getNums(){
        return [-3, 1, 4, -1]
    }
}

class PositiveSum extends IntGenerator{
    getNums(){
        let arr = super.getNums();
        return arr.reduce((acc, el) => {
            if(el > 0){
                return acc +=el;
            } else {
                return acc
            }
        },0)

    }   
}

const positiveSum = new PositiveSum();
let res = positiveSum.getNums();
console.log(res);



  