const mail = prompt('Введите почту');

if (mail.includes('.com') || mail.includes ('.ru') ) {
    console.log(true);
    
} else {
    console.log(false);
    
}

mail.includes('.com') || mail.includes ('.ru') ?  console.log(true) : console.log(false);

