let string = prompt("Введите слово");

if (isNaN(string)) {
   console.log(`#${string.toLowerCase()}`); 
    
} else {
    console.log(`Вы ввели не текст`);
}
