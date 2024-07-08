// cpp program 74
// WAP for multi-level
// Employee
//   Empno
//   Name
//   Basic salary
// allowance
//   DA
//   HRA
//   RA
// total
class Employee {
    constructor(emp_no, name, basicSalary) {
        this.emp_no = emp_no;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    displayData() {
        console.log("Emp number :", this.emp_no);
        console.log("name :", this.name);
        console.log("basic Salary:", this.basicSalary);
    }
}

class Allowance extends Employee {
    constructor(emp_no, name, basicSalary) {
        super(emp_no, name, basicSalary)
        this.DA = 0;
        this.HRA = 0;
        this.RA = 0;
    }

    calculateAllowance() {
        this.DA = this.basicSalary * 0.4;
        this.HRA = this.basicSalary * 0.2;
        this.RA = this.basicSalary * 0.1;
    }

    totalSalary(){
        return this.basicSalary + this.DA + this.HRA + this.RA;
    }

    displayData() {
        super.displayData();
        console.log("DA :", this.DA);
        console.log("HRA :", this.HRA);
        console.log("RA :", this.RA);
    }
}

let salary = new Allowance(12, "meera", 8000)
salary.calculateAllowance()
salary.displayData()
console.log("total salary:", salary.totalSalary());
