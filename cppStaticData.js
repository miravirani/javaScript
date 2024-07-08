// cpp program 60
// count the total no. of created object using static member and static function

class MyClass {
    static totalCount = 0;

    constructor() {
        MyClass.incrementCount();
    }

    static incrementCount() {
        MyClass.totalCount++;
    }

    static getTotalCount() {
        return MyClass.totalCount;
    }
}

let obj1 = new MyClass();
let obj2 = new MyClass();
let obj3 = new MyClass();
let obj4 = new MyClass();

console.log("Total number of created objects:", MyClass.getTotalCount()); 
