// Дополните 7 задачу кнопкой "Очистить всё", 
// которая удаляет все <li> из списка.

const list = document.querySelector('ul');
const input = document.querySelector('input');
const buttonAdd = document.querySelector('.add');
const buttonRemove = document.querySelector('.remove');

buttonAdd.addEventListener('click', () => {

   if(input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value;
      list.appendChild(li); 
   
      input.value = '';
   }
   
})

buttonRemove.addEventListener('click', () => {

    list.innerHTML = '';
})

