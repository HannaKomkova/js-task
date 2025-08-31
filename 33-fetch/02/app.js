// 2. Реализовать получение всех задач fetch('https://dummyjson.com/todos'). Все элементы
// отобразить в html

let test = async() => {
    let package = await fetch('https://dummyjson.com/todos', {method:'GET' })
    let data = await package.json();
    data.todos.forEach((el) => {
        const p = document.createElement('p');
        p.textContent = el.todo;
        let div = document.querySelector('div');
        div.appendChild(p)
    })
    
}

test()






