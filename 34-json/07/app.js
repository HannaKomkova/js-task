// 7. Создай поле для ID пользователя и кнопку "Найти посты". При клике на кнопку отправь GET-запрос
// на https://jsonplaceholder.typicode.com/posts?userId={id} и выведи заголовки постов этого
// пользователя.

const userID = document.querySelector('.userId');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', async() => {
    let package = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID.value}`, {
        method:'GET'
    })

    let json = await package.json();

    json.forEach((el) => {
        let li = document.createElement('li');
        li.textContent = el.title;
        list.appendChild(li)
    })

    userID.value = null;

})