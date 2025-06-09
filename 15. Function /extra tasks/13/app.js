let promptName = prompt('enter');

const isValidName = (name) => name ? true : false;

const sayHello = (name) => {
   if (isValidName(name)) {
      console.log(`Привет, ${name}!`);
      
   } else {
      console.log("Некорректное имя");
      
   }
} 

sayHello(promptName)



