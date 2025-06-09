const user = {
   role: 'admin',
   name: 'Hanna',
   checkAccess(){
      if(this.role === 'admin'){
         console.log(`${this.name}: полный доступ`);
         
      } else {
         console.log(`${this.name}: ограниченный доступ`);
      }
   }
};

user.checkAccess();

user.role = 'user';

user.checkAccess();