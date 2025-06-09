const obj ={
    M: prompt('enter nummber'),
    countEvens(){
        let res = 0;
        for (let i = 1; i <= this.M; i++) {
            i % 2 === 0? res +=1 : res ;
            
        }
        return res;
    }
}

console.log(obj.countEvens());

 
