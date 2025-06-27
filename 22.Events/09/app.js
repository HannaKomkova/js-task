const button = document.querySelector('button');

let flag = false;

button.addEventListener('click', () =>{
    if(!flag) {
        flag= true;
    } else{
        button.style="background-color: #c242f5";
        flag = false;
    }
    
})







