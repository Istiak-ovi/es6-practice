class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "NbN School";
    }
}
const student1 = new Student(12,"Istiak Ahamed");
const student2 = new Student(14,"Rana Ahamed");
console.log(student1,student2);