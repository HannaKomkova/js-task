const cm = +prompt('Введите  сантиметры');

if ( !isNaN(cm)){
    console.log(`Число метров ${Math.round(cm / 100)}`);
    
} else {
    console.log('ввели не число');
}