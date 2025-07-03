// Создайте в HTML элемент <div class="card"> 
// и добавьте внутрь него через JS: 
// Заголовок (<h3>) с названием товара. Параграф (<p>) с описанием. 
// Кнопку (<button>) с текстом «Купить»

const card = document.querySelector('.card');

const product = document.createElement('h3');
product.textContent = 'Книга';

card.appendChild(product);

const description = document. createElement('p');
description.textContent = 'Детектив с элементами ужасов';

card.appendChild(description);

const button = document.createElement('button');
button.textContent = 'купить';

card.appendChild(button);












