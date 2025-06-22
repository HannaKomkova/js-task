let array = [
   { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": -4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
   ];


const checkArray = (arr) => {
   
   try {
      return arr.filter((el) => {
         if(isNaN(el.id)) throw new Error("Это буква");
         if(el.id < 0) throw new Error('Это отрицательное число');
         if(el.id % 2 === 0 ) return true; 
         
      })
   } catch (error) {
      return error;
   }
}

let res = checkArray(array)

console.log(res);

