// 2. Создай поле для для ввода текста и кнопку "Создать". При клике на кнопку отправь POST-запрос
// на https://jsonplaceholder.typicode.com/posts со следующей структурой данных в body: { "title":
// "Введенный заголовок", "body": ..., "userId": 1 }


const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', async() => {
   let post = {
    "title": "Введенный заголовок", 
    "body": input.value, 
    "userId": 1
   }
    let package = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(post)
    })

    let json = await package.json();
    console.log(json);
    input.value = '';
})



