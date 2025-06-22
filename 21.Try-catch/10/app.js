let array = [1, 2, 2, 3, 4, 4, 5];

let newArray = [];

const makeNewArray = (arr) => {
    try {
        let checkArray = arr.every((el) => !isNaN(el));
        if(!checkArray) throw new Error('в массиве не только числа');
        for (let i = 0; i < arr.length; i++) {
            if(!newArray.includes(arr[i])){
                newArray.push(arr[i])
            } 
        }
        return newArray;
    } catch (error) {
        console.log(error);
        
    }
}

makeNewArray(array);

console.log(newArray.length);








