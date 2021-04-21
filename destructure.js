const person = {name: "riaz Ahmed", phone: 1869, brother: "ridwan Ahmed", relation: "single"};
// const brother = person.brother;
// const phone = person.phone;
// console.log(brother, phone);

const { phone, brother } = person;
console.log("phone:",phone, brother);

const complexObject = {
    name : "Riaz Ahmed",
    education: {
        school : "mograpara",
        clz : "DPI",
    }
}
const {clz} = complexObject.education;
console.log(clz); 