// Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

class MathСalculation{
    n = prompt('enter number');
    array = [];

    makeArray(){
        
        for (let i = 0; i < this.n; i++) {
            this.array.push(prompt('enter number'))
            
        }

        return this.array;
    }

    countNum(){
        this.makeArray();
        return this.array.reduce((acc, el) => {
            if(!isNaN(el)){
             return  el % 2 === 0? acc+1 : acc;
            } else {
             return acc;
            }
            
        }, 0)
    }


}

const mathCalculation = new MathСalculation();

console.log(mathCalculation.countNum());












  