let str = prompt('введите строку');

let array = str.split('');

let count = 0;

for (let i = 0; i < array.length; i++) {

    switch (array[i]) {
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            count += 1;
            break;
    
        default:
            break;
    }
    
}

console.log(`Количество согласных: ${count}`);

count = 0;

for (let i = 0; i < array.length; i++) {
    if ( array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' ||  array[i] === 'u' ) {
        continue
    } else {
        count +=1;
    }
}
console.log(`Количество согласных: ${count}`);

count=0;

let gl = ['a','e','i','o','u'];

for (let i = 0; i < array.length; i++) {
    if ( str.includes(gl) ) {
        continue
    } else {
        count +=1;
    }
}
console.log(`Количество согласных: ${count}`);