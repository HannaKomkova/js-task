// 5. Создай поле для ID пользователя, поле для email и кнопку "Обновить". При клике на кнопку отправь
// PUT-запрос на https://jsonplaceholder.typicode.com/users/{id} с новым email и выведи результат.


const userId = document.querySelector('.userId');
const userEmail = document.querySelector('.userEmail');
const button = document.querySelector('button');

button.addEventListener('click', async() => {
    let object  = {
        email : userEmail.value
    }

    let package = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`, {
        method:'PUT',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(object)
    })

    let res = await package.json();
    
    let div = document.querySelector('div');
    let p = document.createElement('p');
    p.textContent = userEmail.value;
    div.appendChild(p);
    userEmail.value = '';
    userId.value = null;
    
})


