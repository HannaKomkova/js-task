const a = + prompt ('Введите оценку от 0 до 100');

if ( a >= 0 && a <= 59){
    console.log('Результат: F');
    
} else if(  a >= 60 && a <= 69) {
    console.log('Результат: D');

} else if(  a >= 70 && a <= 79) {
    console.log('Результат: C');
    
} else if(  a >= 80 && a <= 89) {
    console.log('Результат: B');
    
} else if(  a >= 90 && a <= 100) {
    console.log('Результат: A');
    
} else  {
    console.log('Вы ввели значение не в диапазоне от 0 до 100');
}

