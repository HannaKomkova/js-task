const button = document.querySelector('button');
let array = [];

button.addEventListener('click', () => {
    try {
        let input = document.querySelector('input');
        let tagP = document.querySelector('p');
        if(!input.value) throw new Error("вы ничего не ввели");
        if(!isNaN(input.value)) throw new Error("вы ввели число");
        if(input.value.length < 4) throw new Error("слово короче 4х букв");
        
        array.push(input.value);
        tagP.textContent = `Результат: ${array}`
    } catch (error) {
        alert (error.message);
    }
    
})




