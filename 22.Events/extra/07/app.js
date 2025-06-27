// Скачать 2 любые картинки из интернета. 
// На странице отображается одна картинка. 
// При нажатии на кнопку стоящую рядом она заменяется на другую. 
// Подсказка: узел.src = './../../../...'

const button = document.querySelector('button');
let flag = true;

button.addEventListener('click', () => {
   const img1 = document.querySelector('.img1');
   const img2 = document.querySelector('.img2');

   if(flag) {
      img1.style.display = 'block';
      img2.style.display = 'none';
      flag = false;
   } else {
      img1.style.display = 'none';
      img2.style.display = 'block';
      flag = true;
   }
})





