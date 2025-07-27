// Создайте класс Product. Добавьте проверку в классе Product, чтобы цена не могла быть меньше
// нуля. Если значение некорректное — выбрасывайте ошибку throw new Error. Ошибку обработать
// через try catch.

class Product{
   price;

   constructor(price){
      this.price = price;
   }

   checkPrice(){
      try {
         if ( this.price < 0) throw new Error("Цена не может быть меньше нуля");
         return console.log(`Цена товара: ${this.price}`);
         
      } catch (error) {
         return console.log(error);
          
      }
   }
   
}

const product = new Product(24);
product.checkPrice();

const product1 = new Product(-3);
product1.checkPrice();

