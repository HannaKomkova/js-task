const a = prompt('Введите строку');

console.log(a.slice (0, a.indexOf('b')-1) + a.slice (a.lastIndexOf('b')+1));
