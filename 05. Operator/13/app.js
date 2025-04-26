const a = + prompt ('Введите оценку по шкале от 1 до 5 ');

switch (a) {
    case 1:
        console.log('Очень плохо');
        break;
    case 2:
        console.log('Плохо');
        break;
    case 3:
        console.log('Удовлетворительно');
        break;
    case 4:
        console.log('Хорошо');
        break;
    case 5:
        console.log('Отлично');
        break;

    default:
        console.log('Вы ввели не подходящую оценку');
        break;
}


