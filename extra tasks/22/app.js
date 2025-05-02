const num = +prompt('Введите  число');


if (num > 0) {
    console.log(Math.ceil (num));
    
} else {
    console.log(Math.floor(num));
    
}

num > 0 ? console.log(Math.ceil (num)) :  console.log(Math.floor(num));