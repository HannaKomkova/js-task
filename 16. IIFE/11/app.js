let array = [];
let n = prompt('enter number')

const pushArray = (number) => {
    for (let i = 0; i < number; i++) {
        array.push(prompt('enter'))
    }
    return array
}

let fullArray  = pushArray(n);

const findMaxNumber = (arr) => {
    let max = arr.reduce((max,el) => {
        if(el > max) {
            return max = el;
        } else {
            return el
        } 
    } , -Infinity)
    return max
}

console.log(findMaxNumber(fullArray));
