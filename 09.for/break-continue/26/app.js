let str = prompt('введите строку');

let array = str.split('');

let count = 0;

for (let i = 0; i < array.length; i++) {
    if ( array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' ||  array[i] === 'u' ) {
        count +=1;
    }
    
}

console.log(`Количество гласных: ${count}`);

// 2й способ 

count = 0;

for (let i = 0; i < array.length; i++) {

    switch (array[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            count += 1;
            break;
    
        default:
            break;
    }
    
}

console.log(`Количество гласных: ${count}`);

count=0;

let gl = ['a','e','i','o','u'];

for (let i = 0; i < array.length; i++) {
    if ( str.includes(gl) ) {
        count +=1;
    } 
}

console.log(`Количество гласных: ${count}`);