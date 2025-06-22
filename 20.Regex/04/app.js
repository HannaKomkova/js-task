let promptEmail = prompt('enter email');

const checkEmail = (email) => {
   if (/[a-z_\.0-9\-]+@[a-z]+.[a-z]+/.test(email)){
      console.log(true);
      
   }else {
      console.log(false);
      
   }
}

checkEmail(promptEmail)
  