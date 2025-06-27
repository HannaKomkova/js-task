const button = document.querySelector('button');

const input = document.querySelector('input');

const fillInput = () => {
   try {
      if(!input.value) throw new Error('input пустой');
      if(!isNaN(input.value)) throw new Error('вы ввели число');
      alert(input.value)
   } catch (error) {
      alert(error.message);
   }
   
   
}

button.addEventListener('click', fillInput);
  