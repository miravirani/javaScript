// cpp program 67
// Write a program to calculate the area and perimeter of a rectangle using 
// the concept of inheritance
// Base class
class Shape {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea() {
        return this.length * this.breadth;
    }

    calculatePerimeter() {
        return 2 * (this.length + this.breadth);
    }
}

class Rectangle extends Shape {
    constructor(length, breadth) {
        super(length, breadth);
    }
}

let rectangle = new Rectangle(4, 6);
console.log("Area of rectangle:", rectangle.calculateArea());
console.log("Perimeter of rectangle:", rectangle.calculatePerimeter());

// cpp program 68
// WAP to find maximum from two values using following
// multiple
// A
// Data member : x
// function get_x( )
// B
// Data member: y
// function get_y( )
// C
// function max ()
class A {
    constructor(x){
        this.x = x;
    }
}
class B extends A{
    constructor(x, y){
        super(x)
        this.y = y;
    }
    Maximum(){
        // return this.x * this.y
        if(this.x > this.y){
            console.log("x is max");
        }
        else{
            console.log("y is max");
        }
        return this.x, this.y
    }
}
class Max extends B{
    constructor(x, y){
        super(x, y)
    }
}
let max = new Max(625, 300)
max.Maximum()
console.log("max = ",max);

// cpp program 69
// WAP to create class student, sun, result for multilevel inheritance for student to read marks and
// display final result
class Student {
    constructor(name) {
        this.name = name;
    }
}

class Exam extends Student {
    constructor(name, marks) {
        super(name);
        this.marks = marks;
    }
}

class Result extends Exam {
    constructor(name, marks) {
        super(name, marks);
    }

    displayResult() {
        console.log("name =", this.name);
        return this.marks
    }
}

let studentResult = new Result("John", 75);
console.log("Average marks:", studentResult.displayResult());
