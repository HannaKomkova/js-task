// Создай класс VerbList, метод get() → ["running", "eat", "walking", "sleep"].
// Создай наследника IngFilter, метод get(), который возвращает ["running", "walking"] - элементы длина которых больше 6 символов.

class VerbList{
   get(){
      return ["running", "eat", "walking", "sleep"]
   }
}

class IngFilter extends VerbList{
   get(){
      let arr = super.get();
      let finalArr = arr.filter((el) => el.length > 6)
      console.log(finalArr);
      
   }
}

const ingFilter= new IngFilter();
ingFilter.get()