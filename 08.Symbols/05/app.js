const mail = prompt ('Введите почту');

if (mail.includes('@') && mail.endsWith('.com') || mail.endsWith('.ru')) {
 console.log(true);
 
} else {
    console.log(false);
    
}

mail.includes('@') && mail.endsWith('.com') || mail.endsWith('.ru') ? console.log(true) :  console.log(false);