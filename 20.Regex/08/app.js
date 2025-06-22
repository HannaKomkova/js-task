let promptStr =prompt('enter str')

const checkStr = (str) => {
   let newStr = str.replaceAll(/0-9\!\@\$\:/g, '');
   if(newStr.length === promptStr.length) {
    console.log(true);
    
   } else {
    console.log(false);
    
   }
} 

checkStr(promptStr)
