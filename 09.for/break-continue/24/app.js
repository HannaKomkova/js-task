let str = prompt('введите строку');

let array = str.split(' ');

let count = 0;

for (let i = 0; i < array.length; i++) {
   
   count += array[i].length;
   
}

console.log(`количество символов в строке - ${count}`);







