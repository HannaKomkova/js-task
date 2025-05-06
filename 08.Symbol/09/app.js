const string = prompt('Введите  строку');

let array = string.split(' ');

console.log(array[0][0].toLowerCase() + array[0].slice(1) +' ' + array[1][0].toLowerCase() + array[1].slice(1));
 


if ( array.length == 2) {
    console.log( `${array[0][0].toLowerCase()}${array[0].slice(1)} ${array[1][0].toLowerCase()}${array[1].slice(1)}`);
    
} else {
    console.log( `${array[0][0].toLowerCase()}${array[0].slice(1)} ${array[1][0].toLowerCase()}${array[1].slice(1)} ${array[2][0].toLowerCase()}${array[2].slice(1)}`);
}
 
 