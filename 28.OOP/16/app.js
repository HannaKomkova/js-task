// Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.

class Validator{

   email = prompt('enter email');
   pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   isEmail(){
      return this.pattern.test(this.email)? console.log(true) : console.log(false);
      
   }

}

const validator = new Validator();

validator.isEmail();


