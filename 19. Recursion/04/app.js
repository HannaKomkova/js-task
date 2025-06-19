let promptN = +prompt('enter number');
let promptStep = +prompt('enter step');

const countRes = (step) => {
   if(step === 1) return promptN;
   return promptN *  countRes( step - 1 );
   
}

let res = countRes(promptStep);

console.log(res);




  