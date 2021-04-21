class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName
        this.school = "DPI"
    }
}
const newStudent = new Student(12, "riaz");
const newStudent2 = new Student(13, "robiul");
console.log(newStudent.id, newStudent2.name);