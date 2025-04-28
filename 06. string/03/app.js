const string = prompt('Введите строку');

if ( string[ string.length - 1] === '!') { 
    console.log(true);
    
} else {
    console.log(false);
    
}

string[ string.length - 1] === '!' ? console.log(true) : console.log(false);