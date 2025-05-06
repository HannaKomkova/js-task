const word = prompt('введите слово');

if (word === word.split('').reverse('').join('')) {
    console.log(`слово ${word} - это палиндром`);
    
} else{
    console.log(`слово ${word} - это не палиндром`);
    
}

word === word.split('').reverse('').join('') ?  console.log(`слово ${word} - это палиндром`) :  console.log(`слово ${word} - это не палиндром`);  
