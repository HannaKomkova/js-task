// Создайте класс StringReverser с методом reverseString(str), который переворачивает строку.


class StringReverser {
    str = prompt('enter string');
    reverseString(){
        return this.str.split('').reverse().join('');
        
    }
}

const stringReverse = new StringReverser();

console.log(stringReverse.reverseString());








