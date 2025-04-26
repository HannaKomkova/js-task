const a = + prompt ('Введите 1 число ');
const b = + prompt ('Введите 2 число ');
const c = + prompt ('Введите 3 число ');

if ( a + b > c  && a + c > b && b + c > a ) {

    if ( a === b && b=== c){
        console.log('равносторонний');
        
    } else if ( a === b || b === c || c === a) {
        console.log('равнобедренный');

    } else {
        console.log('разносторонний')
    }

} else {
    console.log('Треугольник не существует');
}


