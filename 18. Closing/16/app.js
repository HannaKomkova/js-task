const rememberNumber = (n) => {
    return () => console.log(n);
     
}

let showN = rememberNumber(32);

showN();
showN();

