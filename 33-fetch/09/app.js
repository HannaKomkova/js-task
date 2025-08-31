// 9. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://randomuser.me/api/, получала от сервера данные случайного пользователя и
// отображала основную информацию на странице (например: полное имя, email, телефон).


let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

button.addEventListener('click', async() => {
    let package = await fetch('https://randomuser.me/api/', {method:'GET'});
    let info = await package.json();
    info.results.forEach((el) => {
        h1.textContent = `${el.name.title} ${el.name.first} ${el.name.last}`
        h2.textContent = `${el.location.city} ${el.location.state} ${el.location.country}`;
        h3.textContent = `${el.email}`
    })
    return;
})



