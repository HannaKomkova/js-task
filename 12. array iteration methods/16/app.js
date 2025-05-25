let array =[];

for (let i = 0; i < 3; i++) {
    array.push(+prompt('введите число'));
}

let add = +prompt('введите число');

console.log([add, ...array]);

