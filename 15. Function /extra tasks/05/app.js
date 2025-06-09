let number = +prompt('enter number');

const checkNumber = (num) =>{
    if(num % 2 === 0){
        alert(`Число ${num} чётное`)
    } else {
        alert(`Число ${num} нечётное`)
    }
}

checkNumber(number);