// Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженную в часах и минутах.
// Входные: 150 минут → Результат: 2 часа 30 минут
// Входные: 240 минут → Результат: 4 часа 0 минут

class Time{

   promptTime = prompt('enter time in minutes')

   makeRes(){
      const hour = Math.floor(this.promptTime /60);
      const minutes = (this.promptTime % 60);

      return console.log(`${hour} часа ${minutes} минут`);
      
   }
};

const time = new Time();
time.makeRes()


