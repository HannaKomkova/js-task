const a = +prompt ('Введите число');

if( Number.isInteger(a)) {

    if ( a > 0) {
        console.log ('Число положительное');
    } else if (a === 0) {
        console.log ('Число равно 0');
    } else if (a < 0) {
        console.log ('Число отрицательное');
    } else {
        console.log ('Вы ввели не число');
    }

} else {
    console.log ('Вы ввели не целое число');
}

