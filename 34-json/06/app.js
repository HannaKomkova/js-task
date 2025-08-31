// 6. Создай поле для ID поста и кнопку "Удалить". При клике на кнопку отправь DELETE-запрос на
// https://jsonplaceholder.typicode.com/posts/{id} и выведи сообщение об успехе

const id = document.querySelector('.id');
const button = document.querySelector('button');

button.addEventListener('click', async() => {
    let package = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`, {
        method:'DELETE'
    })

    const json = await package.json();
    console.log(json);
    
})