const a = +prompt('Введите число от 1 до 7');

// if( a === 1  ) {
//     console.log('Понедельник');
// } else if( a === 2  ) {
//     console.log('Вторник');
// }  else if( a === 3  ) {
//     console.log('Среда');
// }  else if( a === 4  ) {
//     console.log('Четверг');
// } else if( a === 5  ) {
//     console.log('Пятница');
// } else if( a === 6  ) {
//     console.log('Суббота');
// } else {
//     console.log('Воскресенье');
// } 


switch (a) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;

    default: 
        console.log('Вы ввели не то число');
        break;
}

    
