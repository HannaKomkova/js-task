// При нажатии на кнопку у прямоугольного блока меняется цвет 
// фона на случайный из const colors = [ "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta" ];.


const button = document.querySelector('button');
const colors = [ "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta" ];


button.addEventListener('click', () => {

   let tagDiv = document.querySelector('div');
   tagDiv.style.backgroundColor = colors[Math.round(Math.random() * 10)];

})





