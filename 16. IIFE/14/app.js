let str = "programming";
let obj = {};

const makeRes = (str) => {
    let arr = str.split('');
    arr.forEach((el) => {
        if(obj.hasOwnProperty(el)){
            obj[el] +=1;
        } else {
            obj[el] = 1;  
        } 
    })
    return obj;
}
makeRes(str);

for (const key in obj){
    if(obj[key] === 1){
        console.log(key);
        
    }
} 




 
