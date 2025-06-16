function isDivisibleBy(a) {
  return function (b){
    if(b % a === 0){
      console.log(`Число ${b} делится на ${a} без остатка`);
      
    } else {
      console.log(`Число ${b} делится на ${a} с остатком`);
    }
  }
};

isDivisibleBy(10)(30);

isDivisibleBy(423)(2984023);








