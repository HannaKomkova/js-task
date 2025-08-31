// 8. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://official-joke-api.appspot.com/random_joke, получала от сервера случайную шутку в
// формате JSON и отображала её на странице в удобочитаемом виде.

let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

button.addEventListener('click', async() => {
    let package = await fetch('https://official-joke-api.appspot.com/random_joke', {method:'GET'});
    let info = await package.json();
    h1.textContent = info.setup;
    h2.textContent = info.punchline;
    return;
})
