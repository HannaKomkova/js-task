// 4. Найдите на странице элемент <h1> 
// и замените его на новый заголовок <h2> с текстом «Новый заголовок».

const oldTitle = document.querySelector('h1');

const newTitle = document.createElement('h2');

newTitle.textContent = 'Новый заголовок';

oldTitle.parentNode.replaceChild(newTitle, oldTitle );


  