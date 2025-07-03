// Через JS создайте элемент <ul> с тремя элементами списка <li> 
// и добавьте его в документ  HTML.

const newList = document.createElement('ul');
document.body.appendChild(newList);

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');

// li1.textContent = '1';
// li2.textContent = '2';
// li3.textContent = '3';

// newList.appendChild(li1);
// newList.appendChild(li2);
// newList.appendChild(li3);

for (let i = 0; i < 3; i++) {
   
   const li = document.createElement('li');
   li.textContent = `${i+1}`;
   newList.appendChild(li);
   
}

