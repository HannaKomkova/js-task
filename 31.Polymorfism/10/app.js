// Создайте родительский класс NumberProcessor, который будет содержать массив чисел [1, -1, -4, 3, 3,
// 5, 4, 4, 2, 2, 2] и метод processNumbers(), который оставляет в массиве только положительные числа.
// Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод
// processNumbers() и удаляет дубликаты из массива.
// Входные: new NumberProcessor().processNumbers() → Результат: [1, 2, 3, 4, 5]


class NumberProcessor{
    arr = [1, -1, -4, 3, 3, 5, 4, 4, 2, 2, 2];
    processNumbers(){
        return this.arr.filter((el) => el > 0)
    }
}

class UniqueNumberProcessor extends NumberProcessor{

    processNumbers(){
        this.arr = super.processNumbers();
        let emptyArr = [];
        this.arr.forEach((el) => {
            if(!emptyArr.includes(el)){
                emptyArr.push(el)
            } 
        })
        return emptyArr;
    }
}

const uniqueNumberProcessor = new UniqueNumberProcessor();
let res = uniqueNumberProcessor.processNumbers();
console.log(res);
