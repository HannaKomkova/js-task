let promptName = prompt('enter name');

const logIn = (userName) =>{
   if(userName.length > 0) {
    alert(`Привет, ${userName}!`);
   
   } else {
     alert("Гость");
      
   }
} 
logIn(promptName);
