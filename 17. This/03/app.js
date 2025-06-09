const obj = {
    orderId: 'tea',
    status: 'done',
    printStatus(){
        console.log(`Заказ ${this.orderId}: ${this.status}`);
        
    }
}

obj.printStatus();