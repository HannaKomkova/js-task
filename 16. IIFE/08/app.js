let arr = [-2, 5, 3, -1, 0, 4] ;

(()=> {
    let res = arr.filter((el) => el > 0)
    .reduce((sum, el) => sum+el ,0)
    console.log(res); 
})()

 
