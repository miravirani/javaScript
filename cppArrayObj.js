// cpp program 49(1)
class Student {
    constructor(rollno, name, marks) {
        this.rollno = rollno;
        this.name = name;
        this.marks = marks;
        this.total = 0;
        this.percentage = 0;
    }
    
    displayData() {
        console.log(`Roll No:`, this.rollno);
        console.log(`Name:`, this.name);
        console.log(`Marks:`, this.marks.join(', '));
        
        for(let i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        
        this.percentage = this.total / this.marks.length;
        
        console.log(`Total:`, this.total);
        console.log(`Percentage:`, this.percentage);
        console.log("-----------------------");
    }
}

const students = [
    new Student(1, "abc", [80, 85, 90, 88, 92]),
    new Student(2, "xyz", [75, 82, 88, 90, 95]),
    new Student(3, "mk", [85, 88, 92, 90, 85])
];

students.forEach(student => {
    student.displayData();
});

// cpp program 49(2)
class EMP{
    constructor(empNo, name, bacisSalary){
        this.empNo = empNo;
        this.name = name;
        this.bacisSalary = bacisSalary;
    }
    displayData(){
        console.log(`emp no: `, this.empNo);
        console.log(`name : `, this.name);

        let da = this.bacisSalary * 0.4;
        let hra = this.bacisSalary * 0.2;
        let ra = this.bacisSalary * 0.1;
        let salary = this.bacisSalary + da + hra + ra;
        
        console.log("total basic salary =", salary);
    }
}
const emp = new EMP(12, "xyz", 5000)
emp.displayData();