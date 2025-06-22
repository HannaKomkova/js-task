let array = [5, 1, 2, 3, 0, 1, 5, 0, 2];
let i = 0;
let count = 0;

const countSum = (arr) => {
    
    try {
        let checkArr = arr.every((el) => !isNaN(el));
        if(!checkArr) throw new Error('в массиве не только числа');
        if(arr[i] === 0) return;
        count += arr[i];
        i++;
        countSum(arr);
    } catch (error) {
        console.log(error);
        
    }
}

let res = countSum(array);
console.log(count);




