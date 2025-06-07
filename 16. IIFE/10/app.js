let array = [];
let n = prompt('enter number')

const pushArray = (number) => {
    for (let i = 0; i < number; i++) {
        array.push(prompt('enter'))
    }
    return array
}

let fullArray  = pushArray(n);

const findNumber = (arr) => arr.filter((el) => el % 2 === 0)

console.log(findNumber(fullArray));
