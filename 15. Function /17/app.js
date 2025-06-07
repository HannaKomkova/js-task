const makeStr = (str) => str.toLowerCase()

const makeArray = (str) => str.split('') 

const finalResult = (arr) => arr.map((el,i) => {
    if (i % 2 !== 0){
        return el.toLowerCase()
    } else {
        return el.toUpperCase()
    }
})


let strInLowerCase = makeStr('hschool');

let array = makeArray(strInLowerCase)

console.log(finalResult(array).join(''));


