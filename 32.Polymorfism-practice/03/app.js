// Создай класс BaseNumbers с методом get_numbers() →  возвращает массив рандомных чисел Math.random.
// Создай наследника EvenDoubler с методом get_numbers(), который удваивает только четные числа.
// Ожидаемый результат: [4, 8].

class BaseNumbers{
    get_numbers(){
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random()*100))
        }
        return arr;
    }
}

class EvenDoubler extends BaseNumbers{
    get_numbers(){
        this.arr = super.get_numbers();
        return this.arr.filter((el) => {
            if(el % 2 === 0){
                return el * 2;
            }
        })
    }
}

const evenDoubler = new EvenDoubler();
let res = evenDoubler.get_numbers();
console.log(res);
