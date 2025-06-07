let obj = {
   name:prompt('enter name'),
   age:prompt('enter age')
};

(function(){
   if(obj.age >18 ){
      console.log(`${obj.name} - соершеннолетняя`);
      
   }  else {
      console.log(`${obj.name} - несоершеннолетняя`);
      
   }
})();

(() => obj.age >18?  
console.log(`${obj.name} - соершеннолетняя`) 
: console.log(`${obj.name} - несоершеннолетняя`)) ()








