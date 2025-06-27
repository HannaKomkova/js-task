// При клике на кнопку текстовый блок появляется или скрывается.


const button = document.querySelector('button');
let flag = true;

button.addEventListener('click', () => { 
    
    const tagP = document.querySelector('p');

    if(!flag) {
        tagP.style="display: none";
        flag = true;
    } else {
        tagP.style="display: block";
        flag = false;
    }

})

