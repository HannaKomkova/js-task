// 1. Реализовать получение всех задач fetch('https://dummyjson.com/todos

let test = async() => {
    let pack = await fetch('https://dummyjson.com/todos',  {method: 'GET'});
    let res = await pack.json()
    console.log(res);
}

test()