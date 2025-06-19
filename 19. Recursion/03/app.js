let promptN = +prompt('enter numbers');
let i = 1;
let count = 0;

const countRes = (promptN) => {
    if (i > promptN) return;
    count +=i;
    
    i++;

    countRes(promptN);
}

countRes(promptN)

console.log(count);
