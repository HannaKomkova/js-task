// Создай класс StringSource с методом get_strings(), который возвращает ["cat", "horse", "a", "apple"].
// Создай наследника LongStringFilter с методом filter_strings(), который оставляет только строки длиной >= 4.
// Ожидаемый результат: ["horse", "apple"].

class StringSource {
    get_strings(){
        return ["cat", "horse", "a", "apple"];
    }
}

class LongStringFilter extends StringSource{
    filter_strings(){
        let arr = this.get_strings();
        let filterArray = arr.filter((el) => el.length >=4);
        return filterArray;
    }
}

const longStringFilter = new LongStringFilter();
let res = longStringFilter.filter_strings();
console.log(res);









