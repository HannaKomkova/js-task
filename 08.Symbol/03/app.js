const string = prompt('Введите строку');

if (string.length == 0) {
    
    console.log(`Ошибка ввода`);
    
} else {
console.log(`${string.replaceAll('@', '')}`);

}

if (string.length <=0) {
    
    console.log(`Ошибка ввода`);
    
} else {
console.log(`${string.split('@').join('')}`);

}