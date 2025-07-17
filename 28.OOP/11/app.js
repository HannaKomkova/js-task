// Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString,
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

class WordString{
    string = prompt('enter string')
    reverseString(string){
        return console.log(string.split('').reverse().join(''));
        
    }

    upperFirst(string){
       return console.log( string[0].toUpperCase() + string.slice(1));
        
    }


    upperEvery(string){
        const array = string.split(' ').map((el) => {
            return el[0].toUpperCase() + el.slice(1)
        })
        const res = array.join(' ')
        return console.log(res);
        
    }
}

const wordString = new WordString();

wordString.reverseString(wordString.string);
wordString.upperFirst(wordString.string);
wordString.upperEvery(wordString.string);



