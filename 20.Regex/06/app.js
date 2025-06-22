let promptLink = prompt('enter')

const checkLink = (link) => {
   if (/[A-Z]\:\\[A-Za-z]+\\[A-Za-z]+\\[A-Za-z]+\\[A-Za-z]+\.[a-z]+/.test(link)){
      console.log(true);
      
   } else {
      console.log(false);
       
   }
}

checkLink(promptLink)









