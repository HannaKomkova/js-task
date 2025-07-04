// Есть кнопка — по клику показывайте <div> с тремя абзацами текста

const button = document.querySelector('button');
const div = document.querySelector('div');
let flag = false;

button.addEventListener('click', () => {

    if (!flag) {
        flag = true;
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
        flag = false;
    }
    
})




