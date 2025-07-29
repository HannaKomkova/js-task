// Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(),
// который возвращает площадь прямоугольника

class Rectangle{
    width;
    height;

    constructor( width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return console.log(this.height * this.width);
        
    }
}

const rectangle = new Rectangle(+prompt('enter width'), +prompt('enter height'));
rectangle.getArea();

