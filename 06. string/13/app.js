const animal =  prompt ('Введите животное');

switch (animal) {
    case 'собака':
        console.log('млекопитающее');
        break;
    case 'кошка':
        console.log('млекопитающее');
        break;
    case 'попугай':
        console.log('Птица');
        break;
    case 'рыбка':
        console.log('Рыба');
        break;

    default:
        console.log('Вы ввели не то');
        break;
}


