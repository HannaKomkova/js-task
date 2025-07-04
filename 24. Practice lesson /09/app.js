// У вас есть лента из 2 карточек товара и кнопка "Показать ещё", 
// которая добавляет 3 новых поста в ленту

const unActiveCard = document.querySelectorAll('.cardUnActive');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    unActiveCard.forEach((el) => {
        el.style.display = 'block';

    })

    button.style.display = 'none';
})












