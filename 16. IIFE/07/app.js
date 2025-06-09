let arr = ["один", "два", "три"];
let finalArray =[];

(() => {
    for (let i = arr.length-1; i >=0; i--) {
      finalArray.push(arr[i])      
    }
    console.log(finalArray);
    
})()






