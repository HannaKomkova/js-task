// Пользователь вводит текст в input и нажимает кнопку 
// — добавляйте этот комментарий всписок ul расположенный ниже.

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);

    input.value = '';
})



