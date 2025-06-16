let promptName = prompt('enter name');

const greetUser = (name) => {
    return function(){
        console.log(`Привет, ${name}`);
        
    }
}

let greetName = greetUser(promptName);

greetName();



