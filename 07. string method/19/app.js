const surname = prompt ('Введите имя и фамилию');

let b = surname.split(' ');

if (b[0][0] === b[0][0].toUpperCase() && b[1][0] === b[1][0].toUpperCase()) {
    console.log(true);
    
} else {
    console.log(false);
    
}


