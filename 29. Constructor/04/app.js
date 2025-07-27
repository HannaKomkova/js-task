// Создайте класс Rectangle с полями width и height. Реализуйте метод area(), возвращающий площадь.

class Rectangle{
    width;
    height;

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        console.log(`Площадь равна: ${this.width * this.height}`);
        
    }
}

const rectangle = new Rectangle(10, 15);
rectangle.area();




  