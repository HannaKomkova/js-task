let promptPassword = +prompt('enter password')

// let passwordWith4Num = /[0-9]{4}/

const checkPassword = (password) => {
    if(/[0-9]{4}/.test(password) || /[0-9]{6}/.test(password) ) {
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}

checkPassword(promptPassword)









