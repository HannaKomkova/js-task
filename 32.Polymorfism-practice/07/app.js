//Создай класс SentenceList, метод get() → ["my cat", "your dog", "wildcat", "mouse"].
// Создай наследника CatFilter, метод filterData(), который возвращает строки, содержащие "cat".
// Ожидаемый результат: ["my cat", "wildcat"].

class SentenceList{
   get(){
      return ["my cat", "your dog", "wildcat", "mouse"]
   }
}

class CatFilter extends SentenceList{
   filterData(){
      let arr = this.get();
      return arr.filter((el) => {
         if(el.includes('cat')){
            return el;
         }
      })
   }
}

const catfilter = new CatFilter();
let res = catfilter.filterData();
console.log(res);


