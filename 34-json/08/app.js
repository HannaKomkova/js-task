// Создай поля для name и email, и кнопку "Создать пользователя". 
// При клике на кнопку отправь POSTзапрос на https://reqres.in/api/users и выведи ID 
// и дату создания. Добавить валидацию на ввод

const userName= document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const button = document.querySelector('button');

button.addEventListener('click', async() => {
    try {
        const post = {
            username: userName.value,
            userEmail: userEmail.value
        }
        if(userName.value === '') throw new Error("user name is empty");       
        if(userEmail.value === '') throw new Error("user email is empty");
        
        let package = await fetch(' https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(post)
        })
    
        let json = await package.json();
    } catch (error) {
        console.log(error);
        
    }
    
    
})