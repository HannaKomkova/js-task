const button = document.querySelector('button');
let array = [0, 1];

button.addEventListener('click', () => {
   const input = document.querySelector('input');
   try {
      if (isNaN(input.value)) throw new Error('вы ввели не число');
      if (!input.value) throw new Error('input пустой');
      for (let i = 2; i < input.value; i++) {
         array.push(array[i-1] + array[i-2]);
         
      }
      alert (array);
   } catch (error) {
   alert(error.message)
   }
})



