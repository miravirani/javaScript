// cpp program 75

// wAP for Hybrid inheritance
//                          Person
//                          name
//                          code
// account                                              admin
// salary                                               experience
//                         information
//                          name
//                          code
//                          salary
//                          experience

class Person{
    constructor(name, code){
        this.name = name;
        this.code = code;
    }
    displayData(){
        console.log("name = ", this.name);
        console.log("code = ", this.code);
    }
}
class Account extends Person{
    constructor(name, code, salary){
        super(name, code)
        this.salary = salary
    }
    displayData(){
        super.displayData();
        console.log("salary = ", this.salary);
    }

}

class Admin extends Account{
    constructor(name, code, salary, experience){
        super(name, code, salary)
        this.experience = experience;
    }
    displayData(){
        super.displayData();
        console.log("experience = ", this.experience);
    }
}

let person = new Admin("manan", 123, 8000, 2)
person.displayData()
