// Создай класс TextCleaner, метод clean(text) удаляет знаки препинания и приводит текст к нижнему регистру.
// Пример: "Hello, World!" → "hello world".
// Создай наследника WordCounter, метод count_words(text) возвращает количество слов.
// Пример: "Hello, World!" → 2.

class TextCleaner{
    clean(){
        let text = prompt('enter string').toLowerCase();
        let pattern = /[!,.?]+/;
        let newStr = text.split('').filter((el) => {
            if(!pattern.test(el)){
                return el
            }
        }).join('');

        return newStr;
    }
}

class WordCounter extends TextCleaner{
    count_words(){
        let newStr = this.clean();
        let count = newStr.split(' ').length;
        return console.log(count);
        
    }
}

const wordCounter = new WordCounter();
wordCounter.count_words()