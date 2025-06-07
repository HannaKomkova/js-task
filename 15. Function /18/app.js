let dayPrompt = prompt('введите день');
let monthPrompt = prompt('введите месяц')
let yearPrompt = prompt('введите год')

const makeData = (day, month, year) => {
    return `${day}/${month}/${year}`
}

let str =  makeData(dayPrompt, monthPrompt, yearPrompt)

const makeReverse = (str) => {
    return str.split('/').reverse().join('-')
}

console.log(makeReverse(str));
  