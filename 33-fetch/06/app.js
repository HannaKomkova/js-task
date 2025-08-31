// 6. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://dog.ceo/api/breeds/image/random, получала от сервера ответ со случайной
// фотографией собаки и отображала это изображение на странице

let button = document.querySelector('button');
let img = document.querySelector('img');

button.addEventListener('click', async() => {
    let package = await fetch('https://dog.ceo/api/breeds/image/random', {method:'GET'});
    let info = await package.json();
    return img.src = info.message;
})