// Создай класс AgeChecker, в котором:
// - метод isValid(age) возвращает true, если возраст больше или равен 18.
// - метод main() спрашивает возраст через prompt(), вызывает isValid(), и выводит в консоль: "Доступ разрешен" — если возраст валидный

class AgeChecker{

   
   isValid(age){
      return age >= 18 ?  true :  false;
       
   }
   
   
   main(){
      const age = prompt('enter your age');
      this.isValid(age)?  console.log('Доступ разрешен') : console.log('Доступ запрещен');
      
   }

}

const ageChecker = new AgeChecker();

ageChecker.main();













