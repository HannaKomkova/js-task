const string = prompt('Введите  строку');
const a = prompt ('введите символ');

if (string.includes(a)) {
    console.log(string.indexOf(a));
    
} else {
    console.log('Символ не найден');
    
}


