let obj = {
    name : '',
    age : '',
    birthday : ''
}

for (let key in obj){
    if (key === 'name'){
        obj[key] = prompt('name');
    }   else if (key === 'age'){
        obj[key] = prompt('age');
    } else {
        obj[key] = prompt('birthday');
    }
    
}

console.log(obj);

