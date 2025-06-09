let promptStr = prompt('enter string');

const reverseStr = (str) =>  str.split('').reverse().join('');

const printReversed = (str) => console.log(reverseStr(str));

printReversed(promptStr);




