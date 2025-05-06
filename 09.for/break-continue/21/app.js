let array = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  switch (array[i]) {
   case  5:
      sum +=1;
      break;
   default:
      break;   
  }
   
}

console.log(`Цифра 5 встречается ${sum} раз`);
