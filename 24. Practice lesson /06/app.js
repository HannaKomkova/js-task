// По нажатию на кнопку создайте и покажите 
// изображение с заданным src

const button = document.querySelector('button');

button.addEventListener('click', () => {
   const img = document.createElement('img');
   img.src = './cat.jpg'
   document.body.appendChild(img);
})














