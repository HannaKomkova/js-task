const v1 = +prompt('Введите скорость первого автомобиля');
const v2 = +prompt('Введите скорость второго автомобиля');
const s = +prompt('Введите расстояние');

if (!isNaN(s) && !isNaN(v1) && !isNaN(v2)) {
       console.log(`Автомобили встретятся через ${(s / (v1 + v2))} часов`);
    
}  else {
    console.log('Введены не числа');
}

// !isNaN(s) && !isNaN(v1) && !isNaN(v2) ? console.log(`Автомобили встретятся через ${(s / (v1 + v2))} часов`) : console.log('Введены не числа');
