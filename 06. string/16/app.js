const num = + prompt ('Введите число');

if ( num >=10 && num <=20) {
    console.log(`${num} - лежит в диапазоне`);
    
} else {
    console.log(`${num} - вне диапазона`);
}

num >=10 && num <=20? console.log(`${num} - лежит в диапазоне`):  console.log(`${num} - вне диапазона`);
