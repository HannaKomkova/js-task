let array =[4, 8, 10];

(() => {
   let sum = array.reduce((res, el) => res + el, 0);
   console.log(sum/3);
   
   })()
  