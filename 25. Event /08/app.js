// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 

const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('p');

const array = [];

button.addEventListener('click', () => {

   try {
      if(!input.value.trim()) throw new Error("input пустой");
      if(isNaN(input.value)) throw new Error("вы ввели не число");
      if(input.value < 0 ) throw new Error("Вы ввели отрицательное число");
      
      array.push(input.value);
      input.value = '';

      p.textContent = ` Результат: ${array}`
      
   } catch (error) {
      p.textContent =` Результат: ${error}`
      input.value = '';
   }

})

