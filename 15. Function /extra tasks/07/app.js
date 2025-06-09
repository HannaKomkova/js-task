const promptName = prompt('enter name');
const count = +prompt('enter number');

const repeatName = (name, numberOfrepeat) => {
 let str = '';
 for (let i = 0; i < numberOfrepeat; i++) {
   str += name + ' ';
 }
 return str
}

console.log(repeatName(promptName, count));
  


