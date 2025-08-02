// Создай класс RepeatingArray, метод get() → [1, 2, 2, 3, 2, 4].
// Создай наследника MajorityElement, метод get() возвращает элемент, встречающийся чаще всего.
// Пример: 2

class RepeatingArray{
    get(){
        return [1, 2, 2, 3, 2, 4];
    }
}

class MajorityElement extends RepeatingArray{
    get(){
        let arr = super.get();
        let obj ={};
        arr.forEach((el) => {
            if(!obj.hasOwnProperty(el)){
                obj[el] = 1;
            } else {
                obj[el] +=1;
            }
        })
        let max = 0;
        let maxKey = ''
        for(let key in obj){
            if(obj[key] > max){
                max = obj[key];
                maxKey = key;
            } 
        }
        return console.log(maxKey);
        
        
    }
}

const majorityElement = new MajorityElement();
majorityElement.get()