// 10. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем название страны, отправляла GET-запрос по ссылке
// http://universities.hipolabs.com/search?country=... и отображала на странице список
// университетов с их названиями и веб-сайтами


let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');


button.addEventListener('click', async()=> {
    ul.textContent = '';
    let package = await fetch(`http://universities.hipolabs.com/search?country=${input.value}`, {method:'GET'});
    let info = await package.json();
    info.forEach((el) => {
        let li = document.createElement('li');
        li.textContent = `${el.name} ${el.domains}`;
        ul.appendChild(li)
    })
    input.value = '';
    return;
})
