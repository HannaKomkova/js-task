const num1 = + prompt ('Введите 1 число');
const num2 = + prompt ('Введите 2 число');

if ( num1% num2 === 0 ) {
    console.log('Кратно');
    
} else {
    console.log('Не кратно');
    
}

num1% num2 === 0 ? console.log('Кратно') : console.log('Не кратно');
