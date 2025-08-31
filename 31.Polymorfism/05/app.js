// Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

class Number {
   num;
   constructor(num){
      this.num = num;
   }
}

class PalindromeChecker extends Number{

   constructor(num) {
      super(num)
   }

   check(){
      let str = this.num.toString()
     if(str.split('').reverse().join('') === str){
      return console.log(true);
      
     } else {
      return console.log(false);
      
     }
   }
}

const palindromChecker = new PalindromeChecker(12321)
palindromChecker.check()

