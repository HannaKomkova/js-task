const a = +prompt ('Введите число');

// if(!isNaN(a)) {

//    console.log(Math.round(Math.sqrt (a)));

// } else {
//     console.log ('Число введено некорректно');
// }

!isNaN(a) ? console.log(Math.round(Math.sqrt (a))) :  console.log ('Число введено некорректно');

