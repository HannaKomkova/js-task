// По нажатию на кнопку заменяйте <h1> с "Добро пожаловать" 
// на "Приятно вас видеть"

const oldTitle = document.querySelector('h1');

const button = document.querySelector('button');

button.addEventListener('click', () => {

    const newTitle = document.createElement('h2');
    newTitle.textContent = 'Приятно вас видеть'; 
    oldTitle.parentNode.replaceChild(newTitle, oldTitle);
})




