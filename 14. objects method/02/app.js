const obj = {"1": "a", "2": "b", "name": "c"};
let str = '1';

if (obj.hasOwnProperty(str)){
  console.log('содержит');
  
}else {
  console.log('не содержит');
  
}
