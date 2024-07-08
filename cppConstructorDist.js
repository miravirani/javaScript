// Cpp program 64
// Define the class student which has name (char name [20] and age(int)) define the default constructor,
// member functions get_data( ) for taking the name and age of the student put_data( ) for displayingthe
// data ofstudent
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getData(){
        console.log("name = ", this.name);
        console.log("age = ", this.age);
    }
}
let student = new Student("manan", 24);
student.getData()

// cpp program 65
// create a class called shape which has private data member "area" which will be used to get value for
// finding area ofsquare, rectangle and circle by using default, parameterized and copy constructor

class Shape{
    constructor(l, b, r, pi){
        this.l = l;
        this.b = b;
        this.r = r;
        this.pi = pi;
    }
    square(){
        console.log("area of square =", this.l * 4);
    }
    rectangle(){
        console.log("area of rectangle =", 2 * this.l + this.b)
    }
    circle(){
        console.log("area of circle =", this.pi * this.r * this.r);
    }
}
let shape = new Shape(9, 8, 6, 3.14)
shape.square()
shape.rectangle()
shape.circle()

// cpp program 66
// lass library
// {
//   char bname[20];
//   float price;
//   char putname[20];int
//   ISBN No;
//   public:
//   getdata();
//   putdat();
// };  implement using constructor
class Library {
    constructor(bname, pname, price, isbn_no) {
        this.bname = bname;
        this.pname = pname;
        this.price = price;
        this.isbn_no = isbn_no;
    }

    putData(bn, pn, pr, i_no) {
        this.bname = bn;
        this.pname = pn;
        this.price = pr;
        this.isbn_no = i_no;
    }

    getData() {
        console.log("bname =", this.bname);
        console.log("pname =", this.pname);
        console.log("price =", this.price);
        console.log("isbn_no =", this.isbn_no);
    }

    copyData(other) {
        this.bname = other.bname;
        this.pname = other.pname;
        this.price = other.price;
        this.isbn_no = other.isbn_no;
    }
}

let k = new Library("weetech", "robotics", 3400, 23);
let k1 = new Library();
k1.copyData(k);

k.getData();
k1.getData();
