// Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.

class Student {
    name;
    age;
    grades = [];

    constructor(name, age, grades){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    getAverageGrade(){
        let sum = this.grades.reduce((acc, el) => {
            return acc += el;
        }, 0)
         return sum / this.grades.length;
    }
}

const student = new Student('Hanna', 26, [5, 5, 3, 3]);
console.log(`name: ${student.name}, age: ${student.age}, average grade: ${student.getAverageGrade()}`);








