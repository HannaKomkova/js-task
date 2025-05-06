let array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < array.length; i++) {
   switch (array[i]) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${array[i]} - будний день`);
        break;
   
    default:
        console.log(`${array[i]} -  выходной день`);
        break;
   }
    
}