// Создай класс WordExtractor, метод get_words(text) возвращает уникальные слова из текста.
// Пример: "hi hello hi" → ["hi", "hello"].
// Создай наследника WordLengths, метод get_words(text) возвращает список длин этих слов.
// Пример: [2, 5].


class WordExtractor{
    get_words(){
        let text = prompt('enter text');
        let arr =[];
        text.split(' ').forEach((el) => {
            if(!arr.includes(el)){
                arr.push(el)
            }
        })
        return arr;
    }
}

class WordLengths extends WordExtractor{
    get_words(){
        this.arr = super.get_words();
        let arrOfLength = this.arr.map((el) => el.length);
        return console.log(arrOfLength);
        
    }
}

const wordLengths = new WordLengths();
wordLengths.get_words()