// Создайте новый элемент <div> с текстом «Привет, DOM» 
// и добавьте его в конец документа (document.body).

const newDiv = document.createElement('div');

newDiv.textContent = 'Привет, DOM';

const body = document.body;

body.appendChild(newDiv);



