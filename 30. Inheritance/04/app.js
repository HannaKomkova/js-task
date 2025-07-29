// Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon",
// "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
// getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
// значению.

class StringRepository{
    words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"];

}

class FilteredWords extends StringRepository{
    getWordsByLength(length){
        return this.words.filter((el) => el.length === length)
    }

}

const filteredWords = new FilteredWords();
console.log(filteredWords.getWordsByLength(5));




  