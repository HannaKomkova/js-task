let a = +prompt('введите 1ю сторону треугольника');
let b = +prompt('введите 2ю сторону треугольника');
let c = +prompt('введите 3ю сторону треугольника');


const makeTriangle = (side1, side2, side3) => {
    try {
        if([side1, side2, side3].some((el) => isNaN(+el))) throw new Error('вы ввели не число');
        if(![side1, side2, side3].every((el) => Number.isInteger(+el))) throw new Error('вы ввели не целое число');
        if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            console.log('такой треугольник может существовать');
            
        } else  throw new Error('такого треугольника не может существовать');
            
    } catch (error) {
        console.log(error);
        
    }
}

makeTriangle(a, b, c);

