let promptUrl = prompt('enter url');

const checkUrl = (url) => {
   if(/^https?\:\/\/[a-z0-9]+\.[a-z]{2,3}/.test(promptUrl)) {
      console.log(true);
      
   } else {
      console.log(false);
      
   }
}

checkUrl(promptUrl)