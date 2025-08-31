// 4. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.genderize.io/?name=... чтобы отправить GET запрос и получить от сервера
// информацию о вероятном поле (male/female) для этого имени.

// let button = document.querySelector('button');
// let input = document.querySelector('input');

// button.addEventListener('click', async () => {
//     const info = await fetch(`https://api.genderize.io/?name=${input.value}`, {method:'GET'});
//     const res = await info.json();
//     console.log(res);
    
// })