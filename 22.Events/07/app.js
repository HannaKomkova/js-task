const button = document.querySelector('button');
let flag = false;

button.addEventListener('click', () => {
   const input = document.querySelector('input');
   try {
    if(isNaN(input.value)) throw new Error("вы ввели не число");
    if(!input.value) throw new Error("импут пустой");
    const tagP = document.querySelector('p');
    tagP.textContent = `Результат: ${input.value * 2}`
   } catch (error) {
    alert(error.message)
   }
})






