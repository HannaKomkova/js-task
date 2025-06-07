let array = [];
let n = prompt('enter number')

const pushArray = (number) => {
    for (let i = 0; i < number; i++) {
        array.push(prompt('enter'))
    }
    return array
}

let fullArray  = pushArray(n);

const countNumbers = (arr) => {
    let negative = 0;
    let positive = 0;

    arr.forEach((el) => {
    if ( el > 0 ){
        positive +=1;
    } else {
        negative +=1;
    }})
    console.log(`Количество положительных чисел в массиве ${positive}`);
    console.log(`Количество отрицательных чисел в массиве${negative}`);
    
    
}

countNumbers(fullArray)


