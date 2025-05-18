let array = ["apple", 3, "orange", 2];

let finalArray = [];

for (let i = 0; i < array.length; i++) {
   if(!isNaN(array[i])) {
    finalArray.push(array[i]);
   }
    
}

console.log(finalArray);


