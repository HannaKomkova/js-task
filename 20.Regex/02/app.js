let promtUserInformation = prompt('enter user information');

const checkUserInformation = (prompt) =>{
    if (/^[А-Я][а-я]+ [А-Я][а-я]+ [0-9][0-9]/.test(prompt)) {
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}

checkUserInformation(promtUserInformation);


