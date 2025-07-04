// На странице есть форма с двумя полями ввода:
// • первое поле — email
// • второе поле — пароль
// • и кнопка "Войти".
// По клику на кнопку нужно:
// • проверить, что email написан правильно (с помощью регулярного выражения),
// • убедиться, что пароль не пустой и содержит не менее 8 символов.
// Если всё введено верно — выводите сообщение Успешный вход!
// Если есть ошибка — показывайте соответствующее сообщение об ошибке под формой

const button = document.querySelector('button');

const patternEmail = /^[a-zA-Z1-9\-\.\_]+@[a-z]+\.[a-z]+/;

const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');

button.addEventListener('click', () => {
    try {
        if(!patternEmail.test(inputEmail.value)) throw new Error("Неверный email");
        if(!inputPassword.value) throw new Error("Пароль пуст");
        if(inputPassword.value.length < 8) throw new Error("Не верный пароль");
        
        alert('Успешный вход!')
        
    } catch (error) {
         alert(error)
    }

})












