console.log("before");
let a = 10;

try{
    console.log("first try catch");
    document.write("this is error");
    // console.log(a / 0);
    throw("user defind error");
    console.log("hello");
}
catch (error){
    console.log("this is catch :", error);
}
console.log("aftor");