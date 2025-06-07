let array = [12, 49, 123, 88, 305];
let n = 10;

const findNumbers = (arr) =>{
    let final =  arr.filter((el) => {
        let str = String(el).split('');
        let res = str.reduce((sum, el)=> sum += +el,0)
        return res > n;
    })

    return final;

}



console.log(findNumbers(array));













