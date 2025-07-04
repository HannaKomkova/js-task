// Добавляйте задачи в список <ul> из input, по нажатию на кнопку.


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {

   if(input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value;
      list.appendChild(li); 
   
      input.value = '';
   }
   
})






