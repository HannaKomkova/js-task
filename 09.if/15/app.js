const str = prompt ('введите слова');

const array = str.split(' ');

let word = '';

for (let i = 0; i < array.length; i++) {
    
 word += array[i][0].toUpperCase() + array[i].slice(1) + ' ';
    
}

console.log(word);

//второй способ решения задачи 

for (let i = 0; i < array.length; i++) {
    
   array[i] = array[i][0].toUpperCase() + array[i].slice(1);
       
   }

  
   console.log( array.join(' '));
   