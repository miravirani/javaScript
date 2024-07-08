// cpp program 40

class EMP {
    constructor(emp_no, salary, name, department) {
        this.emp_no = emp_no;
        this.salary = salary;
        this.name = name;
        this.department = department;
    }
    get() {
        console.log("emp_no = ", this.emp_no);
        console.log("salary = ", this.salary);
        console.log("name = ", this.name);
        console.log("department= ", this.department);
    }
}
let emp1 = new EMP(2, 10000, "manan", "it")
emp1.get()

// cpp program 41
class StudentRecord {
    constructor(enrollmentNo, studentName, course, marks1, marks2, marks3) {
        this.enrollmentNo = enrollmentNo;
        this.studentName = studentName;
        this.course = course;
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }
    readStudentRecord() {
        console.log("enrollmrntNo = ", this.enrollmentNo);
        console.log("studentName =", this.studentName);
        console.log("course = ", this.course);
        console.log("marks1 = ", this.marks1);
        console.log("marks2 = ", this.marks2);
        console.log("marks3 = ", this.marks3);
    }

    calculateTotalMarks() {
        return this.marks1 + this.marks2 + this.marks3;
    }

    displayResult() {
        console.log("Enrollment No:", this.enrollmentNo);
        console.log("Student Name:", this.studentName);
        console.log("Course:", this.course);
        console.log("Marks 1:", this.marks1);
        console.log("Marks 2:", this.marks2);
        console.log("Marks 3:", this.marks3);
        const totalMarks = this.calculateTotalMarks();
        console.log("Total Marks:", totalMarks);
        console.log("Result:", totalMarks >= 100 ? "Pass" : "Fail");
    }
}

let student = new StudentRecord(20, "virani vivek", "english", 80, 85, 75);
student.readStudentRecord();
student.displayResult();

// cpp program 42
class Distance {
    constructor(feet, inch) {
        this.feet = feet;
        this.inch = inch;
    }
    get() {
        console.log("feet = ", this.feet);
        console.log("inch = ", this.inch);
        return (this.feet + this.inch) / 12;
    }
}

let distances = new Distance(360, 60);
console.log("Total Distance in feet:", distances.get());

// cpp program 43
// class Employee {
//     constructor(empId, empName, empDept) {
//         this.empId = empId;
//         this.empName = empName;
//         this.empDept = empDept;
//     }

//     getData() {
//     //   return {
//         empId = this.empId,
//         empName = this.empName,
//         empDept = this.empDept
//     //   };
//     }

//     displayData() {
//         const employeeData = this.getData();
//         console.log(`Employee ID: ${employeeData.empId}`);
//         console.log(`Employee Name: ${employeeData.empName}`);
//         console.log(`Employee Department: ${employeeData.empDept}`);
//     }
// }

// const employees = [];
// for (let i = 0; i < 100; i++) {
//     const empId = i + 1;
//     const empName = `Employee ${i + 1}`;
//     const empDept = `Department ${i + 1}`;
//     const employee = new Employee(empId, empName, empDept);
//     employees.push(employee);
// }

// employees.forEach((employee) => {
//     employee.displayData();
// });

// cpp program 44
//  for various mathematical operation using class & object
class Mathematical {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum(x, y) {
        return x + y;
    }
    sub() {
        return this.a - this.b;
    }
    mul() {
        return this.a * this.b;
    }
    div() {
        return this.a / this.b;
    }
}

let mathematical = new Mathematical(10, 20)
console.log("a + b = ", mathematical.sum(5, 3));
console.log("a - b = ", mathematical.sub());
console.log("a * b = ", mathematical.mul());
console.log("a / b = ", mathematical.div());
