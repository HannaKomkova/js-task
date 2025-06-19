let i = 5;
let str = '';

const showNumbers = () => {
    if (i === 0) return;
    i--;
    if (i % 2 === 0){
        str +=i + ' ';
    }
    
    showNumbers();
}

showNumbers();

console.log(str);


