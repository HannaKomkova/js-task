const num1 = + prompt ('Введите 1 число ');
const num2 = + prompt ('Введите 2 число ');

if (num1 === num2) {
    console.log('числа равны');
    
} 
    else {
 console.log(`Большее число ${Math.max(num1,num2)}`);

}


num1 === num2? console.log('числа равны') : console.log(`Большее число ${Math.max(num1,num2)}`);

