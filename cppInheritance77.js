// cpp program 77
// WAP foe Multiple Inheritance
// Item                                 item info
//   Item no                                 price
//   Item name                               quantity
//                amount total
//                amount

class Item {
    constructor(itemNumber, name){
        this.itemNumber = itemNumber;
        this.name = name;
    }
    displayData(){
        console.log("item number = ", this.itemNumber);
        console.log("item name = ", this.name);
    }
}

class ItemInfo extends Item{
    constructor(itemNumber, name, price, quantity){
        super(itemNumber, name);
        this.price = price;
        this.quantity = quantity;
    }
    displayData(){
        super.displayData()
        console.log("item price = ", this.price);
        console.log("item quantity = ", this.quantity);
    }
}

class Amount extends ItemInfo{
    constructor(itemNumber, name, price, quantity, amount){
        super(itemNumber, name, price, quantity);
        this.amount = amount;
        
    }
    displayData(){
        super.displayData()
        this.amount = this.price * this.quantity;
        console.log("total amount = ", this.amount);
    }
}

let amount = new Amount(12, "leptop", 4000, 3)
amount.displayData();