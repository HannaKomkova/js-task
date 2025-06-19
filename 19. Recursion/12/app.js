let array = [1, [2, [3]], 4];

const countRes = (arr) => {

    if(arr.length === 1 ) return arr[0] ;
    return arr[0] + countRes(arr.slice(1))

}

const count = countRes(array.flat(2))

console.log(count);


