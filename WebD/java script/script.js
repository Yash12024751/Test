function fn(){
setTimeout(function fn() {
        console.log("hello 1");
    },1000);
setTimeout(function fn() {
        console.log("hello 2");
    },2000);
setTimeout(function fn() {
        console.log("hello 3");
    },3000);
setTimeout(function fn() {
        console.log("hello 4");
    },0000);
}
fn();
console.log("hello world")
console.log("i am yash ")
console.log("hello world")