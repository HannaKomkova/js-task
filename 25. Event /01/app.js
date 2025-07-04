// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const list = document.querySelector('ul');

list.addEventListener('click',(event) => {
    const p = document.querySelector('p');
    p.textContent = event.target.textContent;
    
})




