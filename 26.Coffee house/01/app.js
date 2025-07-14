const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
   { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
   { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
   { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
   { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
   { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
   ];


const about = document.querySelector('.about');
const buttonFruits = document.querySelector('.fruits');
const buttonVegetables = document.querySelector('.vegetables');
const buttonBerries = document.querySelector('.berries');
const card = document.querySelector('.card');
const buttonClose = document.querySelector('.close');

window.addEventListener('click', (event) => {
    if (!event.target.closest('.item')) {
        card.style.display = 'none';
    }
    
})

let arrayCategory = ['Фрукты', 'Овощи', 'Ягоды'];



const showResult = (params) => {
    about.innerHTML ='';
    card.style.display = 'none';
    const arrayOfFruits = items.filter((el) => el.category === params ? true : false);
    arrayOfFruits.forEach((elem) => {
        const item = document.createElement('div');
        item.className ='item';
        item.innerHTML = `<h2>${elem.category}</h2> <p> ${elem.name}</p> `;
        about.appendChild(item);

        item.addEventListener('click', () => {

            card.style.display = 'block';

            const cardName = document.querySelector('.card .name');
            cardName.innerHTML = elem.name;

            const cardDescription = document.querySelector('.card .description');
            cardDescription.innerHTML = elem.description;

            const cardCategory = document.querySelector('.card .category');
            cardCategory.innerHTML =  elem.category;

            buttonClose.addEventListener('click', () =>  card.style.display = 'none');
        })

    })
}


buttonFruits.addEventListener('click', () =>  showResult('Фрукты'));

buttonVegetables.addEventListener('click', () => showResult('Овощи'));

buttonBerries.addEventListener('click', () =>  showResult('Ягоды'));

