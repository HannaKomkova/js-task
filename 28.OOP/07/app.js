//Создай класс NameChecker, в котором:
// - isValid(name) — возвращает true, если длина имени от 3 до 10 символов
// - main() — получает имя через prompt(), вызывает isValid(), и выводит: "Имя принято" или "Имя слишком короткое/длинное"

class NameChecker{

   
   isValid(name){
      if ( name.length >=3 && name.length <=10 ){
         return true;
      } else{
         return false;
      }
       
   }
   
   
   main(){
      const name = prompt('enter your name');
      this.isValid(name)?  console.log('Имя принято') : console.log('Имя слишком короткое/длинное');
      
   }

}

const nameChecker = new NameChecker();

nameChecker.main();






