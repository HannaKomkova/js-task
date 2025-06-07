let array = ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"];

const findWords = (arr) => {
   let res = 0;
   for (let i = 0; i < arr.length; i++) {
      if(arr[i].length === 3 || arr[i].length === 4){
         res +=1;
      }
   }
   return res;
}

console.log(findWords(array));





