//ССоздайте класс Student с полями name и массивом оценок grades. Реализуйте метод
// getAverageGrade() для подсчёта среднего балла.

class Student{
   name;
   grades = [];

   constructor(name, grades){
      this.name = name;
      this.grades = grades;

   }

   getAverageGrade(){
      const sum = this.grades.reduce((acc, el) => {
         return acc += +el;
      }, 0)

      let num = 0;
      for (let i = 0; i < this.grades.length; i++) {
         num +=1;
      } 

      return console.log(`Средний балл ${this.name} - ${sum/num}`);
      
   }
}

const student = new Student('Hanna', [4, 5, 6, 3, 7]);
student.getAverageGrade()




