// На странице есть список <ul>, поле ввода и кнопка. 
// Добавляйте в список только те значения, которые являются 
// корректными email-адресами (с помощью регулярного выражения). 
// Если email невалиден — бросьте исключение 
// с соответствующим сообщением.


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const pattern = /^[a-zA-Z1-9\-\.\_]+@[a-z]+\.[a-z]+/;

button.addEventListener('click', () => {

    try {
        if(!pattern.test(input.value)) throw new Error("email не корректен");
        
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li); 


        input.value = '';

    } catch (error) {
        alert(error)
    }

})