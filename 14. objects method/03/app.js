const obj=  { product1: 10, product2: 5, product3: 8 };

let res = Object.values(obj).reduce(function(sum,el){
    return sum + el;
},0)

console.log(res);
