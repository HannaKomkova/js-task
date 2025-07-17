// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
// анаграммами. Добавить проверки на ввод

class Anagram {
   word = prompt('enter word');

   checkAnagram(){
      if(this.word.split('').reverse().join('') === this.word){
         return console.log(true);
         
      }
      else {
         return console.log(false);
         
      }
   }
}

const anagram = new Anagram();

anagram.checkAnagram()

