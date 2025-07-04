// У элемента есть кнопка "Подробнее" — 
// по клику добавляйте абзац с описанием.

const button = document.querySelector('button');

button.addEventListener('click', () => {
   const paragrgaph = document.querySelector('p');
   paragrgaph.style.display = 'block';
})

