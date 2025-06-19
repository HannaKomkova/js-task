let array = [10, 5, 11, 8];
let max = array[0];
let i = 0;
 

const findMaxNumber = (array) => {
        if (i === array.length) return;
        if (array[i] > max) {
            max = array[i]
        }
        i++;
        
        findMaxNumber(array)
}

findMaxNumber(array)
console.log(max);

