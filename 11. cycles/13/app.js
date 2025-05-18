let array = [];

for (let i = 0; i < 10; i++) {
   array.push(prompt('введите число'));
   
}

console.log(`-${array.join('-')}-`);

//second way 

let finalArray =[];
let result ='';

for (let i = 0; i < 10; i++) {
   finalArray.push(prompt('введите число'));
   
}

for (let i = 0; i < finalArray.length; i++) {
  result += finalArray[i] + '-';
   
}

console.log(`-${result}`);
