// Вы вводите строку. Проверить является ли это слово палиндром.
// Добавить проверки

const button = document.querySelector('button');

const input = document.querySelector('input');

const p = document.querySelector('p');

button.addEventListener('click', () => {
    if(input.value === input.value.split('').reverse().join('')) {
        p.textContent = `Результат: это паллиндром`;
    } else {
        p.textContent = `Результат: это не паллиндром`;
    }

    input.value = '';

})












