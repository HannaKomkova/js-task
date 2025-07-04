// Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу. 

const button = document.querySelector('button');

const input = document.querySelector('input');

const tBody = document.querySelector('tbody');

button.addEventListener('click', () => {

    const newTR = document.createElement('tr');
    const newTD = document.createElement('td');
    newTD.textContent = input.value;
    tBody.appendChild(newTR).appendChild(newTD);

    input.value = '';
})












