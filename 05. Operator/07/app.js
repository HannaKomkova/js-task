const num = +prompt('Введите номер месяца');

// if ( num === 1 || num === 2 || num === 12) {
//     console.log('Зима');
    
// } else if( num === 3 || num === 4 || num === 5) {
//     console.log('Весна');

// } else if( num === 6 || num === 7 || num === 8) {
//     console.log('Лето');

// } else if( num === 9 || num === 10 || num === 11) {
//     console.log('Осень');

// } 
//    else {
//     console.log('Такого номера месяца нет');
// }


switch (num) {
    case  3: 
    case  4 :
    case  5:
        
        console.log('Весна');
        break;

    case 12: 
    case  1 :
    case  2:
            
        console.log('Зима');
        break;  

    case 6: 
    case  7 :
    case 8:
            
        console.log('Лето');
        break;
    
    case 9: 
    case 10:
    case 11:
                
        console.log('Осень');
        break; 

    default:
        console.log('Такого номера месяца нет');
        break;
}

