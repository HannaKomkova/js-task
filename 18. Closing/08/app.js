function inRange(min) {
    return function(max){
        return function(value){
            if(value >= min && value <=max){
                console.log(`число ${value} входит в диапазон от ${min} до ${max}`);
                
            } else {
                console.log(`число ${value} не входит в диапазон от ${min} до ${max}`);
            }
        }
    }
}

inRange(10)(20)(15)

inRange(12)(32)(44)

 
