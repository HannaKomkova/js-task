let string = prompt("Введите строку");

if (!isNaN(string)) {
    if (string %2=== 0){
        console.log(`${string} - Четное число`);
    } else {
        console.log(`${string} - Нечетное число`);
    }
    
    
} else {
    console.log(string.split(''));
    
}
