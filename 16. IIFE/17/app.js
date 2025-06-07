let array = [10, 2, 5, 3, 7];

let min = array.reduce((min, el) => {
    if(el< min){
        return min = el;
    } else {
        return min;
    }
}, +Infinity)

let max = array.reduce((max, el) => {
    if(el>max){
        return max = el;
    } else {
        return max;
    }
}, -Infinity)

console.log(max-min);



