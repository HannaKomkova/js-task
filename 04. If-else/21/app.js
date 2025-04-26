const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');

if (a === 0) {
    console.log('а не должно быть равно 0');
} 


let D = Math.pow(b, 2) - 4 * a * c ;

if ( D > 0){
    let x1 = ( -b + Math.sqrt(D)) / (2 * a);
    let x2 = ( -b - Math.sqrt(D)) / (2 * a);

    if (x1 < x2) {
        console.log (x1, x2);
    } else {
        console.log (x2, x1);
    }
    
    
} else if ( D === 0 ) {
    console.log (-b / (2 * a));
    
} else  {
    console.log ('D < 0 не имеет действительных квадратных корней');
}










