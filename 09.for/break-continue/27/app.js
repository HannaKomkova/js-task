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