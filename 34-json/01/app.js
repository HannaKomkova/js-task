// 1. Создай кнопку "Загрузить посты". При клике на кнопку сформируй GET-запрос на
// https://jsonplaceholder.typicode.com/posts и выведи список заголовков постов.

const button = document.querySelector('button');
const ul = document.querySelector('ul')

button.addEventListener('click', async()=>{
    let package = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    let list = await package.json();
    list.forEach((el) => {
        const li = document.createElement('li');
        li.textContent = el.title;
        ul.appendChild(li);
    })
})