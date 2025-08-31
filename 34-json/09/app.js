// 9. Создай поля для ID, name, email и кнопку "Обновить". При клике на кнопку отправь PUT-запрос на
// https://reqres.in/api/users/{id}, в тело передай name, email и выведи в html результат - полные данные
// пользователя


const userName= document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const userId = document.querySelector('.userId');
const button = document.querySelector('button');

const div = document.querySelector('div')


button.addEventListener('click', async() => {
        const post = {
            username: userName.value,
            userEmail: userEmail.value,
            userId: userId.value
        }

        
        let package = await fetch(' https://reqres.in/api/users', {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(post)
        })

        let json = await package.json();
        
    let h1 = document.createElement('h1');
    h1.textContent = json.username;
    div.appendChild(h1);

    let h3 = document.createElement('h3');
    h3.textContent = json.userEmail;
    div.appendChild(h3);

    let p =document.createElement('p');
    p.textContent = json.userId;
    div.appendChild(p)

    })        