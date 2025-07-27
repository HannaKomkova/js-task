// Класс SpaceRemover содержит функцию, которая убирает все лишние пробелы и выводит результат.

class SpaceRemover{
    str = prompt('enter string');
    remove(){
       return this.str.replace(/\s+/g, ' ').trim();
       
    }
}

const spaceRemover = new SpaceRemover();
console.log(spaceRemover.remove());


