let array = [121, 202, 345, 11, 99];

const res = array.filter((el) => {
    const elNumber = String(el);
    if(elNumber === elNumber.split('').reverse().join('')){
        return true;
    }
    else {
        return false;
    }

})

console.log(res);


