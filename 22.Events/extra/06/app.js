// По умолчанию размер текста у параграфа 20px. 
// При каждом клике на кнопку стоящую рядом с параграфом текст 
// увеличивается на 2 пикселя. Подсказка: узел.style = 'font-size:' + ... + 'px'


const button = document.querySelector('button');
let size = 20;

button.addEventListener('click', () => {
   const tagP = document.querySelector('p');
   size += 2;
   tagP.style.fontSize = `${size}px`;

})









