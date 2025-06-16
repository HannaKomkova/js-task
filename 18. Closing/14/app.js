const secretMessage = (msg) => {
    return () => {
        console.log(msg);
        
    }
}

const showSecret = secretMessage('Это секрет');

showSecret();




 
