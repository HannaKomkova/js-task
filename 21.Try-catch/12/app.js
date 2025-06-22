let promptEmail = prompt('enter email');
const pattern = /^[a-z0-9\_\-]+@[a-z]+\.[a-z]+$/;

const checkEmail = (mail) => {
    try {
        if(pattern.test(mail)){
            console.log('почта введена верно');
            
        } else throw new Error('почта введена неверно')
    } catch (error) {
        console.log(error);
        
    }
}

checkEmail(promptEmail)





