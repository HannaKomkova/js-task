const obj ={"a": 1, "b": 2, "c": 3};
const obj1 ={"a": 1, "bre": 2, "ccc": 3};

const objFinal = {};

Object.keys(obj1).forEach(function(el){
    if (obj.hasOwnProperty(el)){
        objFinal[el] = obj[el]
    }
})

console.log(objFinal);




 
