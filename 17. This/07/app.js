const sum ={
  N: prompt('enter number'),
  sumToN(){
    let count = 0;
    for (let i = 1; i <= this.N; i++) {
     
      count += i;
    }
    return count;
  }
};

console.log( sum.sumToN());






