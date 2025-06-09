let array = [1, 2, 3, 5, 6]

const returnRes = (arr) => {
    return arr.reduce((sum, el) => {
        if (el % 2 === 0){
         sum +=1;
        }
        return sum;
    }, 0);
}

let res =returnRes(array)

console.log(`количество чётных элементов ${res}`);





