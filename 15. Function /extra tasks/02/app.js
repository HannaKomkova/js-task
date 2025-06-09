let promptName = prompt('enter name');
let promptAge = +prompt('enter age');

const makeAlert = (name1, age1) =>{
    alert(`${name1}, вам ${age1} лет`);
}

makeAlert(promptName, promptAge);
