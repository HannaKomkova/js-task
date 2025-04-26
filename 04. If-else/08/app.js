const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');

if ( a % b === 0 ) {
    console.log('Делится');
    console.log(a / b);

} else  {
    console.log('Не делится');
    console.log('Остаток равен =', a % b);
}

