// 5. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.nationalize.io/?name=... чтобы отправить GET-запрос и получить от сервера
// информацию о странах, с которыми это имя ассоциируется чаще всего, включая вероятность
// для каждой страны.

let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', async() => {
    let package = await fetch(`https://api.nationalize.io/?name=${input.value}`, {method:'GET'});
    let res = await package.json();
    console.log(res);
    
})





