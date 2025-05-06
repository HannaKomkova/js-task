const url = prompt('Введите ссылку');

if (url.startsWith('http://') || url.startsWith('https://')) {
    console.log(true);
    
} else {
    console.log(false);
    
}