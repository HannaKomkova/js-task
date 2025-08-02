// Создай класс TextSource, метод get() → "education is powerful".
// Создай наследника VowelCounter, метод get(), который возвращает количество гласных букв.
// Ожидаемый результат: 9.

class TextSource{
   get(){
      return "education is powerful";
   }
}

class VowelCounter extends TextSource{
   get(){
      let str = super.get();
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let count = str.split('').reduce((acc, el) => {
         if(vowels.includes(el)){
            return ++acc;
         } else {
            return acc;
         }
      }, 0)

      console.log(count);
      
   }
}

const vowelCounter = new VowelCounter();
vowelCounter.get();