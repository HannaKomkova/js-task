let word = prompt('enter word');
let arrayWithVowels = ['a', 'e', 'o', 'u', 'i', 'y'];
let res = 0;

(()=>{
    let arrayFromTestedWord = word.split('');
    arrayFromTestedWord.forEach((el) => {
        if(arrayWithVowels.includes(el)){
            res +=1;
        }
    })
    return res;
}
)()

console.log(res);



  