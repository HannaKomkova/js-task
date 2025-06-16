let promptDay = prompt('введите день');
let promptMonth = prompt('введите месяц');
let promptYear = prompt('введите год');

const formatDate = (separator) =>{
    return (day) => {
        return (month) =>{
            return (year) => {
                console.log(`${day}${separator}${month}${separator}${year}`);
                
            }
        }
    }
}

formatDate('-')(promptDay)(promptMonth)(promptYear);

