// cpp program 78
// WAP to demonstrate the use of pure virtual function
// class A{
//     constructor(a){
//         this.a = a;
//     }
//     virtual set(){
//         console.log("number a :", this.a);
//     }
// }

// class B extends A{
//     constructor(a, b){
//         super(a)
//         this.b = b;
//     }

//      virtual get(){
//         console.log("number b :", this.b);
//     }
// }

// let C = new B(6, 8)
// Define a base class
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function () {
    throw new Error("This method must be implemented by subclasses");
}

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function () {
    return "Woof!";
}

var animal = new Animal("Generic Animal");
var dog = new Dog("Buddy");

try {
    console.log(animal.makeSound());
} catch (error) {
    console.error(error.message);
}

console.log(dog.makeSound());

// cpp program 79
// WAP for pure virtual function
// Shape
// Width
// height
// getarea( ) ------>make this function as pure
// virtual function
//  Rectangle Triangle
// getsides( w,h) getsides(w,h)
// getarea( ) getarea( )
//  Rectangle area= width * height
// Triangle area= (width * height)/2
