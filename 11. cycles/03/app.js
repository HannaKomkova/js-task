let array = [2, 3, 4, 5];

let result = 1;

let i = 0;
while (i < array.length) {
    result *= array[i];
    i++;
}

console.log(result);

result = 1;

for (el of array){
    result *= el;
}
console.log(result);

