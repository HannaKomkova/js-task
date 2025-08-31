// 3. Реализовать получение фактов про котов fetch('https://catfact.ninja/fact) и результат отобразить
// в <p>

let test = async() => {
    let package = await fetch('https://catfact.ninja/fact', {method: 'GET'});
    let res = await package.json();
    let p = document.createElement('p');
    p.textContent = res.fact;
    let div = document.querySelector('div');
    div.appendChild(p)
}
test()