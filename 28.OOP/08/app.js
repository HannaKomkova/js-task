// ВКласс EmailChecker, в котором:
// - isValid(email) — возвращает true, если email содержит символ @
// - main() — спрашивает email через prompt(), вызывает isValid() и пишет: "Email корректен" или "Некорректный email"

class EmailChecker{

   
   isValid(email){
      return email.includes('a')? true : false;
       
   }
   
   
   main(){
      const email = prompt('enter your name');
      this.isValid(email)?  console.log('Email корректен') : console.log('Некорректный email');
      
   }

}

const emailChecker = new EmailChecker();

emailChecker.main();

