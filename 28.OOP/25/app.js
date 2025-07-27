// Класс VowelCounter, который в конструкторе принимает строку и выводит количество гласных.

class VowelCounter{
   str= prompt('enter string');
   vowels =['a', 'e', 'i', 'o', 'u', 'y']
   count() {
      let res = 0;
      this.str.split('').forEach((el) => {
         if(this.vowels.includes(el)){
            res +=1;
         } 
      })
      return res;
   }
}

const vowelCounter = new VowelCounter();

console.log(vowelCounter.count());

