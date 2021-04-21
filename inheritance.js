class Parent{
    constructor(){
        this.fatherName = "Ahmed"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child('azaan');
const baby2 = new Child("ayesha");
console.log(baby.getFullName(), baby2.getFullName());