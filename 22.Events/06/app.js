const button = document.querySelector('button');
let flag = false;

button.addEventListener('click', () => {
   const input = document.querySelector('input');
   if(!flag) {
      input.value = '???';
      flag = true;
   } else {
      input.value = '!!!';
      flag = false;
   }
})









