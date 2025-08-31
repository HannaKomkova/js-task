// 4. Создай поле для названия задачи, поле для числа, чекбокс - поле complited (создается как input type
//     checkbox) и кнопку "Добавить задачу". По клику на кнопку отправь POST-запрос на
//     https://jsonplaceholder.typicode.com/todos со структурой: { "title": ..., "completed": ... (true/ false, значение
//     из чекбокса), "userId": ... } Результат создания отобразить в html

const task = document.querySelector('.task');
const userId = document.querySelector('.userId');
const checkbox = document.querySelector('.completed')
const button = document.querySelector('button');

button.addEventListener('click' , async() => {
    let post = {
        "title": task.value, 
        "completed": checkbox.value, 
        "userId": userId.value}

    let package = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(post)
    })

    let res = await package.json(); 
    
    let item = document.querySelector('div');
    let itemTitle = document.createElement('h1');
    let itemCompleted = document.createElement('p');
    let itemId = document.createElement('p');

    itemTitle.textContent = res.title;
    res.completed === 'on'?  itemCompleted.textContent = true : itemCompleted.textContent = false;
    itemId.textContent = res.userId;

    item.appendChild(itemTitle);
    item.appendChild(itemCompleted);
    item.appendChild(itemId);

task.value = '';
userId.value = null;
})    