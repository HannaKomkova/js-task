// 7. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://api.ipify.org?format=json, получала от сервера ответ с вашим текущим IP-адресом
// и отображала его на странице.

let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', async() => {
    let package = await fetch('https://api.ipify.org?format=json', {method:'GET'});
    let info = await package.json();
    return p.textContent = info.ip;
    
})