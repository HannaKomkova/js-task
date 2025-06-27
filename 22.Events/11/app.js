const button = document.querySelector('button');


button.addEventListener('click', () => {
    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');
    let inputValue1 = '!!!';
    let inputValue2 = '???';
    input1.value = inputValue2;
    input2.value = inputValue1;
})



