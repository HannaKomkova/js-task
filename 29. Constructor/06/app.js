// Создайте класс Movie с полями title, year и rating. Добавьте метод isPopular(), возвращающий true,
// если рейтинг выше 8. Вызовите метод из нескольких экземпляров классов с разными значениями
// rating. 

class Movie{
   title;
   year;
   rating;
   constructor(title, year, rating){
      this.title = title;
      this.year = year;
      this.rating = rating;
   }

   isPopular(){
      if(this.rating > 8){
         return console.log(`${this.title} - true`);
         
      } else {
         return console.log(`${this.title} - false`);
         
      }
   }
}

const movie =  new Movie('С любовью, Рози', 2009, 10);
movie.isPopular();

const movie1 =  new Movie('Балерина', 2025, 6);
movie1.isPopular();













