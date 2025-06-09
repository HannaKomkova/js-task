let password = prompt('enter password');

const isStrongPassword = (pwd) => pwd.length > 8 ? true : false;

const registerUser = (name, pwd) => {
   if(isStrongPassword(pwd)) {
      alert(`Пользователь ${name} зарегистрирован`);
      
   } else {
      alert(`Слабый пароль`);
      
   }
} 

let userName = prompt('enter name');
registerUser(userName, password)





