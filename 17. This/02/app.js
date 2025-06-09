const person = {
    firstName: 'Hanna',
    secondName: 'Komkova',
    fullName(){
        console.log(`${this.firstName} ${this.secondName}`);
        
    }
};

person.fullName();

