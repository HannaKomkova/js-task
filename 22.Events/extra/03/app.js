// Пользователь вводит имя в input,
//  и при нажатии на кнопку имя отображается в параграф.


const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    const input = document.querySelector('input');
    const tagP = document.querySelector('p');

    tagP.textContent = input.value;
});



