// Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4«

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

const student = new Student("Alice", 20, [5, 4, 5, 3, 4]);
console.log(` ${student.name}, (${student.age}), имеет средний балл ${student.getAverageGrade()}`);








