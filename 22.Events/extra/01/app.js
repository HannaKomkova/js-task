// На странице есть кнопка и рядом отображается
//  в параграф количество нажатий на неё.


const button = document.querySelector('button');

let count = 0;

button.addEventListener('click', () => {
    const tagP = document.querySelector('p');
    count++;
    tagP.textContent = count;
})

