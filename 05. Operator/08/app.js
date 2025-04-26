const a = +prompt('Введите число от 1 до 4');

if (!isNaN(a)) {

        switch (a) {
            case 1:
                console.log('Зима');
                break;

            case 2:
                console.log('Весна');
                break;

            case 3:
                console.log('Лето');
                break;

            case 4:
                console.log('Осень');
                break;

            default:
                console.log('вы ввели число не от 1 до 4');
                break;
        }
} else {
    console.log('Вы ввели не число');
    
}

