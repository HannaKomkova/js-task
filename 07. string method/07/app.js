const a = prompt('Введите строку');

if (a.endsWith('.ru') || a.endsWith('.com')) {
    console.log(true);
    
}  else {
    console.log(false);
    
}

a.endsWith('.ru') || a.endsWith('.com') ? console.log(true) : console.log(false);