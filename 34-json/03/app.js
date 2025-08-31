// 3. Создай 2 поля для ввода текста, 1 для ввода числа и кнопку "Создать". При клике на кнопку
// отправь POST-запрос на https://jsonplaceholder.typicode.com/posts со следующей структурой
// данных: { "title": ... "body": ..., "userId": ... }. Результат создания отобразить в html

const title = document.querySelector('.title');
const text = document.querySelector('.text');
const userId = document.querySelector('.userId');
const button = document.querySelector('button');

button.addEventListener('click' , async() => {
    let post = {
        "title": title.value, 
        "body": text.value, 
        "userId": userId.value}

    let package = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(post)
    })

    let res = await package.json(); 
    
        let item = document.querySelector('div');
        let itemTitle = document.createElement('h1');
        let itemText = document.createElement('p');
        let itemId = document.createElement('p');
        itemTitle.textContent = res.title;
        itemText.textContent = res.body;
        itemId.textContent = res.userId;
        item.appendChild(itemTitle);
        item.appendChild(itemText);
        item.appendChild(itemId);
   
    title.value = '';
    text.value = '';
    userId.value = null;

})