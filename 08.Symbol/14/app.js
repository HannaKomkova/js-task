const string =  prompt ('Введите строку ');

let a = string.split('/');

console.log(`${a[a.length-1]}`);

console.log(string.slice(string.lastIndexOf('/')+1));
