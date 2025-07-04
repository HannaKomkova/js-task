// Создайте блок текста с кнопкой "Показать/Скрыть". 
// При клике на кнопку текст должен показываться или скрываться.

const paragraph = document.querySelector('p');

const show = document.querySelector('#show');
const hide = document.querySelector('#hide');

show.addEventListener('click',() => {
    paragraph.style.display = 'block';
})

hide.addEventListener('click', () => {
    paragraph.style.display = 'none';
})



