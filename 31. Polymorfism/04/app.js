// // Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот же элемент дважды.
// Условия:
// • Массив nums содержит только целые числа.
// • Вы можете вернуть индексы в любом порядке.
// • Для каждого набора входных данных существует ровно одно решение.
// Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([2, 3, 4], 6)→ Результат: [0, 2]

class TwoSum{
    nums;
    target;

    constructor(nums, target){
        this.nums = nums;
        this.target = target;
    }
    findIndices(){
        let res = []
       for (let index = 0; index <= this.nums.length-1; index++) {
        for (let j = 0; j <= this.nums.length-1; j++) {
            if(this.nums[index] + this.nums[j] === this.target){
                res.push(index)
                res.push(j)
            }
            
        }
        return console.log(res);
       }
    }
}

const twoSum = new TwoSum([2, 7, 11, 15], 9);
twoSum.findIndices()

const twoSum2 = new TwoSum([2, 3, 4], 6);
twoSum2.findIndices()




  