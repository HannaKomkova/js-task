let array = [1, 2, 3, 4, 5];
let a = 0;
let b = 0;

console.log(array);

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        a+= 1 ;
    } else {
        b+= 1;
    }
    
}

console.log(`Четные: ${a}, Нечетные: ${b}`);


array = [2, 4, 6, 8, 10];
console.log(array);

a =0;
b=0;


for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
        a+= 1 ;
    } else {
        b+= 1;
    }
    
}

console.log(`Четные: ${a}, Нечетные: ${b}`);

