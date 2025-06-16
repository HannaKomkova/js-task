const  greaterThanX = (x) => {
    return function(num) {
        if(num > x) {
            console.log(true);
            
        } else {
            console.log(false);
            
        }
    }
}

let isGreater = greaterThanX(9);

isGreater(3);
isGreater(10);














