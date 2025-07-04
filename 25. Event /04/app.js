// По наведению на кнопку вывести сообщение «Hi».
//  Когда мышка выходит за границы кнопки сновка скрывать

const button = document.querySelector('button');
const p = document.querySelector('p')

button.addEventListener('mouseover', () => {
        p.textContent = 'Hi';
})

button.addEventListener('mouseleave', () => {
    p.textContent = '';
})


  