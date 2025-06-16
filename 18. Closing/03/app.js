function divideBy(x){

    return function(y){
        console.log(y/x);
        
    }
}

divideBy(3)(30);

