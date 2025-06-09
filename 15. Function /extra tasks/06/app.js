let a = +prompt('enter 1st number');
let b = +prompt('enter 2nd number');

const checkNumbers = (num1, num2) =>{
   if(num1 > num2){
      alert(`Число ${num1} больше числа ${num2}`)
   } else {
      alert(`Число ${num2} больше числа ${num1}`)
   }
}

checkNumbers(a, b)





