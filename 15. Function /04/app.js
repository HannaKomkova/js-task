function filterArray(arr){
 return arr.filter((el) => el.length <= 2)
}

console.log(filterArray(['by', 'belarus', 'de', 'ru', 'germany']));

const filterArray2 = (arr) => {
   return arr.filter((el) => el.length <= 2)
}

console.log(filterArray2(['by', 'belarus', 'de', 'ru', 'germany']));