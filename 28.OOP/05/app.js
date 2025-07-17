// Создай класс Greeter с двумя методами:
// sayHello() — выводит в консоль: "Привет!"
// sayBye() — выводит в консоль: "Пока!"

class Greeter{

   sayHello(){
      console.log('Hello');
      
   }

   sayBye(){
      console.log('Goodbye');
      
   }

}

const greeter = new Greeter();
greeter.sayHello();
greeter.sayBye();

