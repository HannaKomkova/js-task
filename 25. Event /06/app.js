// Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.

const button = document.querySelector('button');

const patternEmail = /^[a-zA-Z1-9\-\.\_]+@[a-z]+\.[a-z]+/;

const email = document.querySelector('#email')
const inputName = document.querySelector('#name');
const password = document.querySelector('#password');

button.addEventListener('click', () => {

   try {
      if(!inputName.value.trim()) throw new Error("Вы не ввели имя");
      if(!patternEmail.test(email.value)) throw new Error("Почти не верная");
      if(password.value.length < 8 ) throw new Error("Пароль меньше 8 символов");

      alert('sucsess')
       
   } catch (error) {
      alert(error)
   }
})














