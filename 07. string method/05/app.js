const string = prompt ('Введите строку').trim();

if(isNaN(string)) {
    console.log(string[0].toUpperCase() + string.slice(1));
    
} else {
    console.log('Ошибка ввода');
    
}


isNaN(string) ? console.log(string[0].toUpperCase() + string.slice(1)) : console.log('Ошибка ввода');

