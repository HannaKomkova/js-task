function sum(...arr){
    let res = arr.reduce(function(count, el){
       return count +=el;
    }, 0)
    
    console.log(res);
}

sum(1, 2, 3)






