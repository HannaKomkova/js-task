const string =  prompt ('Введите строку ');

if ( string[0] === 'А' || string[0] === 'а' ) {

    console.log(`Строка ${string} начинается с буквы А.`);
    

} else {
    console.log(`Строка ${string} не начинается с буквы А.`);
}

string[0] === 'А' || string[0] === 'а' ? console.log(`Строка ${string} начинается с буквы А.`) :  console.log(`Строка ${string} не начинается с буквы А.`);

