let array =  ["hi", "hello", "world", "yo"];

let result = '';

for (let i = 0; i < array.length; i++) {
    if ( array[i].length >= 5) {
        result += array[i] + ', ';
        
    } 
    
}

console.log(result);

array =  ["abc", "abcd", "abcde"];


for (let i = 0; i < array.length; i++) {
    if ( array[i].length >= 5) {
      console.log(array[i]);
      
        
    } 
    
}