const a = +prompt('Введите  число');

if (a > 0 && a < 10  || a < 0 && a > -10  ) {
    console.log('Однозначное');
    
} else if (a > 9 && a < 100 || a < -9 && a > -100) {
    console.log(' Двузначное');

} else {
    console.log('Многозначное');
} 