// Есть контейнер в виде карточки товара с кнопкой "Удалить" 
// — по клику убирайте её со страницы.

const card = document.querySelector('.card');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    card.style.display = 'none';
})


  