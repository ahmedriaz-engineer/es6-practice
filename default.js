function add(num1, num2){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    num2 = num2 || 0;
    return num1 + num2;
}
// const total = add(5);
// console.log(total);
// function default parameter or backup value;
function added(num1, num2 = 0){
    return num1 + num2;
}
const totals = added(45);
console.log(totals);

function createUser(name,age = 18){

    const user = {};
    
    user.name = name;
    
    user.age = age;
    
    return user;
    
    }
    console.log(createUser("riaz"));