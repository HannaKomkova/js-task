// *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

class CommonPrefix{
    arr = [];
    constructor(arr){
        this.arr = arr;
    }
    findLongestPrefix(){


        let example = this.arr[0].split('');
        let pref = '';
        let bool = this.arr.every((el) => {
            let word = el.split('')
            for (let i = 0; i <= el.length-1; i++) {
                if(word[i] === example[i]){
                    pref += word[i]
                }
            }
            return;
        })
        
        if(!bool){
            console.log('empty');
            
        } else {
            console.log(pref);
            
        }


        // let example = this.arr[0].split('');
        // let pref = [];

        // this.arr.forEach(el=> {
        //     let word = el.split('');
        //     for (let i = 0; i < word.length; i++) {
        //         if(example[i] === word[i]){
        //             pref.push(example[i])
        //         } else {
        //             break;
        //         }
                
        //     }
        // })

        

    }
}

const commonPrefix = new CommonPrefix(["flower", "flow", "flight"])

commonPrefix.findLongestPrefix()

