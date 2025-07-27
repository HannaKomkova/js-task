// Добавьте в класс Car поле speed = 0, метод drive(speed) для перезаписи скорости и stop() для
// остановки (скорость = 0).

class Car{
   speed = 0;
   constructor(speed){
      this.speed = speed;
   }

   drive(speed) {
      this.speed = speed;
      return console.log(`Скорость равна ${this.speed}`);
      
   }
 
   stop(){
      this.speed = 0;
      return console.log(`Скорость равна ${this.speed}`);
      
   }
}

const car = new Car(prompt('enter speed'))
car.drive(car.speed);
car.stop();


