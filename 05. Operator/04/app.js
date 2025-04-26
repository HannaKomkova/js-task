const a = +prompt ('Введите число');


if (!isNaN(a)) {
        // if (a >0 ){
        //     console.log('Число положительное');
        // } else {
        //     console.log('Число отрицательное');
        // }

        a > 0? console.log('Число положительное') :  console.log('Число отрицательное');

    } else {
        console.log('Ошибка ввода');
        
    }