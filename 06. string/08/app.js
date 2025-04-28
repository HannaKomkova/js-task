const a = prompt('Введите строку');
const num = +prompt('Введите число');


if (!isNaN(num) && (a.length) >= num) {

    console.log(a[num]);
    

} else{
    console.log('индекс вне диапозона');
    
}


!isNaN(num) && (a.length) >= num ?  console.log(a[num]) :  console.log('индекс вне диапозона');