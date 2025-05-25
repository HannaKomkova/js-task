function test(...array){
   let finalArray = array.map(function(el){
      return el.toUpperCase();
   })
   console.log(finalArray);
}


test('apple', 'banana', 'cherry');

