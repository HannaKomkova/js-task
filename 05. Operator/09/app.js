const a = +prompt('Введите  число');

if (!isNaN(a)) {
    switch (a) {
        case 0:
            console.log('Обратного числа не существует');
            break;
    
        default:
            console.log(1 / a);
            break;
    }

} else {
    console.log('Вы ввели не число');
} 