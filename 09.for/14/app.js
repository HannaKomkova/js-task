let n = +prompt('введите число');

let b = '*';
let a = '';

for (let i = 0; i < n; i++){
    a += b.repeat(10) + '\n';
}

console.log(a);

for (let i = 0; i < n; i++) {
   console.log(i, b.repeat(10));
    
}

for (let i = 0; i < n; i++) {
   
   console.log( b.repeat(10));
   console.log('\n');
   
   
}







