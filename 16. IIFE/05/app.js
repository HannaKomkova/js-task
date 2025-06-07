let arr = ["cat", "dinosaur", "elephant", "dog"];
let n = 3;

(()=> {
   let res =  arr.filter((el) => el.length > 3)
   console.log(res);
   
})()