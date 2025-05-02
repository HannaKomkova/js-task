const string = prompt('Введите строку');

if ( isNaN(string)) { 
    console.log(`Длина: ${string.trim().toLowerCase().length}`);
    
} else {
    console.log('Ошибка ввода');
    
}
