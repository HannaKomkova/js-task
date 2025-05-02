const a = prompt('Введите строку');

console.log(a.replaceAll('@', '!'));

console.log(a.split('@').join('!'));
