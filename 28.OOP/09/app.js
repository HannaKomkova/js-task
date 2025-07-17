// Реализуйте класс Singer, который будет иметь следующие свойства: name, surname. Также класс
// должен иметь метод getAutograph, который будет выводить “{name} {surname), с наилучшими
//     пожеланиями”. 

class Singer {
    name = prompt('enter name')
    surname = prompt ('enter surname')
    getAutograph(){
        return console.log(`${this.name} ${this.surname}, c наилучшими пожеланиями`);
    }
}

const singer = new Singer();

singer.getAutograph();


