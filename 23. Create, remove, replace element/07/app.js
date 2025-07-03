// На странице есть список <ul>, поле ввода <input> и кнопка <button>.
//  Создайте функциональность, при которой по нажатию на кнопку текст 
// из поля ввода будет добавляться в конец списка как 
// новый элемент <li>.


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {

   const li = document.createElement('li');
   li.textContent = input.value;
   list.appendChild(li); 

   input.value = '';

})






